import React, { useState } from 'react'
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar,
} from '@ionic/react'
import Menu from '../components/Menu/Menu'
import { logoutUser } from '../firebaseConfig'

const Settings: React.FC = () => {
    const [repos, setRepos] = React.useState<any>(null)
    const [showToast, setShowToast] = useState<boolean>(false)
    const [toastMessage, setToastMessage] = useState<string>('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (repos === null) {
            return
        }

        localStorage.removeItem('repos')
        localStorage.setItem('repos', JSON.stringify(repos))
        setToastMessage('Repositories settings saved!')
        setShowToast(true)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                    <IonButtons slot="end">
                        <Menu />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form onSubmit={onSubmit}>
                    <IonItem>
                        <IonLabel>Set number of repositories</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            type="number"
                            placeholder="Enter Number"
                            onIonChange={(e) => setRepos(parseInt(e.detail.value!, 10))}
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonButton type="submit">Update</IonButton>
                    </IonItem>
                </form>
                <IonButton
                    color={'danger'}
                    onClick={async () => {
                        await logoutUser()
                        sessionStorage.removeItem('isLogged')
                        window.location.href = '/'
                    }}
                >
                    Logout
                </IonButton>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    )
}

export default Settings
