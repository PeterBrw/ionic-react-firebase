import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonLoading,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import './Home.css'
import { useSelector } from 'react-redux'
import { logoutUser } from '../filebaseConfig'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Dashboard: React.FC = () => {
    const username = useSelector((state: any) => state.user.username)
    const history = useHistory()
    const [loading, setLoading] = useState<boolean>(false)

    async function logout() {
        setLoading(true)
        await logoutUser()
        setLoading(false)
        history.replace('/')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLoading message={'Logging out...'} duration={0} isOpen={loading} />
                <p>Hi {username}</p>
                <IonButton onClick={logout}>Logout</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
