import {
    IonContent,
    IonHeader, IonIcon, IonInput,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import './Home.css'

const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                You are on dashboard!
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
