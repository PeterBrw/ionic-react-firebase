import React from "react";
import {
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import './Home.css'
import Menu from "../components/Menu/Menu";

const Home: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>GitHubFy</IonTitle>
                    <IonButtons slot="end">
                        <Menu />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink="/login">Login</IonButton>
                <IonButton routerLink="/register" color={'secondary'}>
                    Register
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Home
