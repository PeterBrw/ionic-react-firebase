import {
    IonAvatar,
    IonButton,
    IonContent,
    IonHeader,
    IonToast,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import './Home.css'

import { useEffect, useState } from 'react'

const Home: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Best App Ever!</IonTitle>
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
