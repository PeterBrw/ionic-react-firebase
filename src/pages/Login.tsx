import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput, IonLoading,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import './Home.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { loginUser } from '../filebaseConfig'
import { toast } from '../toast'

const Login: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        setBusy((true))
        const res = await loginUser(username, password)
        if (res) {
            toast('You have loged in!')
        }
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message={"Please wait.."} duration={0} isOpen={busy}/>
            <IonContent className="ion-padding">
                <IonInput
                    placeholder={'Username'}
                    onIonChange={(e: any) => setUsername(e.target.value)}
                />
                <IonInput
                    type={'password'}
                    placeholder={'Password'}
                    onIonChange={(e: any) => setPassword(e.target.value)}
                />
                <IonButton onClick={login}>Login</IonButton>
                <p>
                    New here? <Link to="/register">Register</Link>
                </p>
            </IonContent>
        </IonPage>
    )
}

export default Login