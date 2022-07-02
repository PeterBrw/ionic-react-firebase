import React, { useEffect, useState } from 'react'
import {
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
} from '@ionic/react'
import Moment from 'react-moment'

const RepoList: React.FC<{ repos: any }> = ({ repos }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [repositories, setRepositories] = useState<any>([])
    const [selectedRepoIndex, setSelectedRepoIndex] = useState<any>(undefined)

    useEffect(() => {
        setRepositories([...repositories, ...repos])
    }, [repos])

    return (
        <>
            <IonList>
                {repos.map((repo: any, index: any) => {
                    return (
                        <IonItemSliding key={index}>
                            <IonItem>
                                <IonLabel>{repo?.name}</IonLabel>
                            </IonItem>
                            <IonItemOptions side="start">
                                <IonItemOption
                                    onClick={() => {
                                        setIsOpen(true)
                                        setSelectedRepoIndex(index)
                                    }}
                                >
                                    Unread
                                </IonItemOption>
                            </IonItemOptions>
                            <IonModal isOpen={isOpen}>
                                <IonHeader>
                                    <IonToolbar>
                                        <IonTitle>{repositories[selectedRepoIndex]?.name}</IonTitle>
                                        <IonButtons slot="end">
                                            <IonButton onClick={() => setIsOpen(false)}>
                                                Close
                                            </IonButton>
                                        </IonButtons>
                                    </IonToolbar>
                                </IonHeader>
                                <IonContent className="ion-padding">
                                    <h3>Repository: {repositories[selectedRepoIndex]?.name}</h3>
                                    <h4>
                                        URL: &nbsp;
                                        <a
                                            target="_blank"
                                            href={repositories[selectedRepoIndex]?.url}
                                            rel="noreferrer"
                                        >
                                            {repositories[selectedRepoIndex]?.url}
                                        </a>
                                    </h4>
                                    <h4>
                                        Created at: &nbsp;{' '}
                                        <Moment format="DD MMM YYYY" withTitle>
                                            {repositories[selectedRepoIndex]?.createdAt}
                                        </Moment>
                                    </h4>
                                    <h4>Used technologies:</h4>
                                    <ul>
                                        {repositories[selectedRepoIndex]?.languages?.nodes.map(
                                            (repo: any, key: any) => (
                                                <li key={key}>{repo?.name}</li>
                                            )
                                        )}
                                    </ul>
                                </IonContent>
                            </IonModal>
                        </IonItemSliding>
                    )
                })}
            </IonList>
        </>
    )
}

export default RepoList
