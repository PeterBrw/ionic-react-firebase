import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

export const Example: React.FC = () => {

    const [showAlert, setShowAlert] = useState(false);

    return (
        <IonContent>
            <IonButton onClick={() => setShowAlert(true)}>Click Me</IonButton>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header="Error"
                message="Something went wrong!"
                buttons={['OK']}
            />
        </IonContent>
    );
};