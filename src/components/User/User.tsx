import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'

const USER = gql`
    query User($login: String!, $first: Int, $languagesFirst2: Int) {
        user(login: $login) {
            name
            repositories(first: $first) {
                nodes {
                    name
                    url
                    languages(first: $languagesFirst2) {
                        nodes {
                            name
                        }
                    }
                }
            }
            avatarUrl
        }
    }
`

const User: React.FC<{ login: any }> = ({ login }) => {
    const { data, loading, error } = useQuery(USER, {
        variables: {
            login: login,
            first: 100,
            languagesFirst2: 5,
        },
    })

    console.log(data)

    if (loading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        )

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <img src={data?.user?.avatarUrl} alt="GitHub User" />
                    <IonCardSubtitle>Username</IonCardSubtitle>
                    <IonCardTitle>{data?.user?.name}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </>
    )
}
export default User
