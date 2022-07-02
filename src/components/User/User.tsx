import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Moment from 'react-moment'
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLoading,
    IonButton,
    IonItem,
} from '@ionic/react'

const USER = gql`
    query User($login: String!, $first: Int!) {
        user(login: $login) {
            name
            avatarUrl
            createdAt
            url
            login
            repositories(first: $first) {
                totalCount
            }
        }
    }
`

const User: React.FC<{ login: any }> = ({ login }) => {
    const [showLoading, setShowLoading] = useState(true)
    const { data, loading, error } = useQuery(USER, {
        variables: {
            login: login,
            first: 100,
            languagesFirst2: 5,
        },
    })

    if (loading)
        return (
            <>
                <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(true)}
                    message={'Loading...'}
                    duration={3000}
                />
            </>
        )

    if (data) {
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(data?.user?.login))
    }

    return (
        <>
            {data?.user && (
                <>
                    <IonCard>
                        <IonCardHeader>
                            <img src={data?.user?.avatarUrl} alt="GitHub User" />
                            <IonCardSubtitle>Username</IonCardSubtitle>
                            <IonCardTitle>{data?.user?.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonItem>
                            Member Since: &nbsp;
                            <Moment format="MMM YYYY" withTitle>
                                {data?.user?.createdAt}
                            </Moment>
                        </IonItem>
                        <IonItem>
                            GitbHub URL: &nbsp;{' '}
                            <a target="_blank" href={data?.user?.url} rel="noreferrer">
                                {data?.user?.url}
                            </a>
                        </IonItem>
                        <IonItem>
                            Number of repositories: &nbsp; {data?.user?.repositories?.totalCount}
                        </IonItem>
                    </IonCard>
                    <IonButton expand="full" onClick={() => window.location.href = '/repos'} >See repositories</IonButton>
                </>
            )}
        </>
    )
}
export default User
