import React, { useState } from 'react'
import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import RepoList from '../components/RepoList/RepoList'
import { gql, useQuery } from '@apollo/client'

const REPOS = gql`
    query Repos($login: String!, $first: Int!, $languages: Int!) {
        user(login: $login) {
            name
            repositories(first: $first) {
                totalCount
                nodes {
                    name
                    url
                    createdAt
                    languages(first: $languages) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`

export const Repos: React.FC = () => {
    const [showLoading, setShowLoading] = useState(true)

    // @ts-ignore
    const login = JSON.parse(localStorage.getItem('user'))
    const { data, loading, error } = useQuery(REPOS, {
        variables: {
            login: login,
            first: 100,
            languages: 20,
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
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Repositories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <RepoList repos={data?.user?.repositories?.nodes || []} />
            </IonContent>
        </IonPage>
    )
}
