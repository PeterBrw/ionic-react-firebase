import {
    IonButton,
    IonContent,
    IonHeader,
    IonLoading,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import './Home.css'
import { useSelector } from 'react-redux'
import { db, logoutUser } from '../filebaseConfig'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

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

    const fetchCountries = async () => {
        const response = db.collection('countries ')
        const data = await response.get()
        data.docs.forEach((item) => {
            console.log(item)
        })
    }

    const getPostsFromFirebase: any = [];

    useEffect(() => {
        const subscriber = db
            .collection("countries")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // getPostsFromFirebase.push({
                    //     ...doc.data(), //spread operator
                    //     key: doc.id, // `id` given to us by Firebase
                    // });
                    console.log(doc.data())
                });

                setLoading(false);
            });

        // return cleanup function
        return () => subscriber();
    }, []); //


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
