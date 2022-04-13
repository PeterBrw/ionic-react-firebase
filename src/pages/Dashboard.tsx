import {
    IonAvatar,
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
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
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const Dashboard: React.FC = () => {
    const username = useSelector((state: any) => state.user.username)
    const history = useHistory()
    const [loading, setLoading] = useState<boolean>(false)
    const [countries, setCountries] = useState<any>([])
    const [filter, setFilter] = useState<string>('')

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
            stringExample: 'Hello world!',
            booleanExample: true,
            numberExample: 3.14159265,
            arrayExample: [5, true, 'hello'],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: 'foo',
                },
            },
        }
        db.collection('countries')
            .doc(uuidv4())
            .set(docData)
            .then(() => {
                console.log('Document successfully written!')
            })
    }

    useEffect(() => {
        const getPostsFromFirebase: any = []
        const subscriber = db.collection('countries').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(), //spread operator
                    key: doc.id, // `id` given to us by Firebase
                })
                // console.log(getPostsFromFirebase)
            })

            setLoading(false)
        })

        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            setCountries(response.data)
        })

        // return cleanup function
        return () => subscriber()
    }, []) //

    const removeCountry = (name: any) => {
        setCountries(countries.filter((item: any) => item.name.common !== name))
    }

    const filteredCountries = countries.filter((country: any) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    )

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
                <IonInput
                    value={filter}
                    placeholder="Search a country"
                    onIonChange={(e: any) => setFilter(e.target.value)}
                ></IonInput>
                <IonList>
                    {filteredCountries.map((elem: any, index: any) => (
                        <IonItemSliding key={index}>
                            <IonItem>
                                <IonAvatar>
                                    <img src={elem.flags.png} />
                                </IonAvatar>
                                <IonLabel className={'ion-padding'}>
                                    <h2>{elem?.name.common}</h2>
                                    <h3>{elem.capital}</h3>
                                    <h3>{elem.region}</h3>
                                </IonLabel>
                            </IonItem>
                            <IonItemOptions side="start">
                                <IonItemOption onClick={() => removeCountry(elem.name.common)}>
                                    Delete
                                </IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
