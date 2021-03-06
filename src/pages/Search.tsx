import React from 'react'
import ExploreContainer from '../components/ExploreContainer'
import { IonHeader, IonTitle, IonToolbar, IonPage, IonContent, IonButtons } from '@ionic/react'
import Menu from "../components/Menu/Menu";

const Search: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Search</IonTitle>
                        <IonButtons slot="end">
                            <Menu />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <ExploreContainer />
                </IonContent>
            </IonPage>
        </>
    )
}

export default Search
