import {
    IonAvatar,
    IonButton,
    IonContent,
    IonHeader, IonIcon, IonInput,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import './Home.css'

import { useEffect, useState } from 'react'

const Example: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Example Page!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Hello from example!
            </IonContent>
        </IonPage>
    )
}

export default Example
