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
import { v4 as uuidv4 } from 'uuid';

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

    const addDataToFirestore = () => {
        var docData = {
            stringExample: "Hello world!",
            booleanExample: true,
            numberExample: 3.14159265,
            arrayExample: [5, true, "hello"],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        db.collection("countries").doc(uuidv4()).set(docData).then(() => {
            console.log("Document successfully written!");
        });
    }

    useEffect(() => {
        const getPostsFromFirebase: any = [];
        const subscriber = db
            .collection("countries")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                    console.log(getPostsFromFirebase)
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
                <IonButton onClick={addDataToFirestore}>Add Data to Firestore</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
