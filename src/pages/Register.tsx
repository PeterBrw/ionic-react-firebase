import {
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonInput, IonLoading,
    IonPage,
    IonTitle, IonToast,
    IonToolbar
} from '@ionic/react'
import './Home.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../firebaseConfig'
import Menu from "../components/Menu/Menu";

const Register: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>('')

    async function register() {

        if (password !== confirmPassword) {
            setToastMessage('Passwords do not match')
            setShowToast(true)
        }

        if (username === '' || password === '') {
            setToastMessage('Username and password are required')
            setShowToast(true)
        }
        setLoading(true)
        const res = await registerUser(username, password)

        if(res.successful) {
            setToastMessage(res.message)
            setShowToast(true)
        } else {
            setToastMessage(res.message)
            setShowToast(true)
        }
        setLoading(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                    <IonButtons slot="end">
                        <Menu />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonLoading message={"Please wait.."} duration={0} isOpen={loading}/>
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
                </p>
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

export default Register
