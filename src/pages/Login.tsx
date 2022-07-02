import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonLoading,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar,
} from '@ionic/react'
import './Home.css'

import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { loginUser } from '../filebaseConfig'
import { setUserState } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showToast, setShowToast] = useState<boolean>(false)
    const [toastMessage, setToastMessage] = useState<string>('')

    async function login() {
        setLoading(true)
        const res: any = await loginUser(username, password)
        if (res.successful) {
            // toast('You have loged in!')
            dispatch(setUserState(res.result.user.email))
            sessionStorage.setItem('isLogged', 'true');
            window.location.href = '/search'
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
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message={'Please wait..'} duration={0} isOpen={loading} />
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

export default Login
