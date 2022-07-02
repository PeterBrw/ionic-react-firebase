import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Moment from 'react-moment'
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLoading,
    IonItem,
} from '@ionic/react'

const ORGANIZATION = gql`
    query Repos($login: String!) {
        organization(login: $login) {
            url
            name
            createdAt
            location
            email
            avatarUrl
            websiteUrl
        }
    }
`

const Organization: React.FC<{ login: any }> = ({ login }) => {
    const [showLoading, setShowLoading] = useState(true)
    const { data, loading, error } = useQuery(ORGANIZATION, {
        variables: {
            login: login,
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

    return (
        <>
            {data?.organization && (
                <>
                    <IonCard>
                        <IonCardHeader>
                            <img src={data?.organization?.avatarUrl} alt="GitHub Organization" />
                            <IonCardSubtitle>Organization</IonCardSubtitle>
                            <IonCardTitle>{data?.organization?.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonItem>
                            Member Since: &nbsp;
                            <Moment format="MMM YYYY" withTitle>
                                {data?.organization?.createdAt}
                            </Moment>
                        </IonItem>
                        <IonItem>
                            <h6> GitHub URL: &nbsp; </h6>
                            <a target="_blank" href={data?.organization?.url} rel="noreferrer">
                                {data?.organization?.url}
                            </a>
                        </IonItem>
                        <IonItem>
                            <h5>Location: &nbsp;</h5>
                            <h5>{data?.organization?.location}</h5>
                        </IonItem>
                        <IonItem>
                            <h5>email: &nbsp; {data?.organization?.email}</h5>
                        </IonItem>
                    </IonCard>
                </>
            )}
        </>
    )
}
export default Organization
