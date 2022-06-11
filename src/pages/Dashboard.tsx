import React from 'react'
import ExploreContainer from '../components/ExploreContainer'
import { IonHeader, IonTitle, IonToolbar, IonPage, IonContent } from '@ionic/react'
import RepoList from "../components/RepoList/RepoList";

const Tab2: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Search</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <ExploreContainer />
                    <RepoList />
                </IonContent>
            </IonPage>
        </>
    )
}

export default Tab2
