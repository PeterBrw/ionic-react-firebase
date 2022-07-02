import React from 'react'
import ExploreContainer from '../components/ExploreContainer'
import { IonHeader, IonTitle, IonToolbar, IonPage, IonContent } from '@ionic/react'

const Search: React.FC = () => {
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
                </IonContent>
            </IonPage>
        </>
    )
}

export default Search
