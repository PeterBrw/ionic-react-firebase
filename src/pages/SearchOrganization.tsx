import React from 'react'
import {IonHeader, IonTitle, IonToolbar, IonPage, IonContent, IonButtons} from '@ionic/react'
import OrganizationContainer from "../components/OrganizationContainer/OrganizationContainer";
import Menu from "../components/Menu/Menu";

const SearchOrganization: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Search Organization</IonTitle>
                        <IonButtons slot="end">
                            <Menu />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <OrganizationContainer />
                </IonContent>
            </IonPage>
        </>
    )
}

export default SearchOrganization
