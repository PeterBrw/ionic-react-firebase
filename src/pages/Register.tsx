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

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from '../toast'
import { registerUser } from '../filebaseConfig'

const Register: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function register() {
        setBusy(true)
        if (password !== confirmPassword) {
            toast('Passwords do not match')
        }

        if (username === '' || password === '') {
            toast('Username and password are required')
        }

        const res = await registerUser(username, password)

        if(res) {
            toast('You have register successfully!')
        }
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
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
                <IonInput
                    type={'password'}
                    placeholder={'Confirm Password'}
                    onIonChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <IonButton onClick={register}>Register</IonButton>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                    {process.env.NODE_ENV}
                </p>
            </IonContent>
        </IonPage>
    )
}

export default Register
