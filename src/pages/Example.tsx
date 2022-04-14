/* Using with useIonModal Hook */

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, useIonModal } from '@ionic/react';

const Body: React.FC<{
    count: number;
    onDismiss: () => void;
    onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
    <div>
        count: {count}
        <IonButton expand="block" onClick={() => onIncrement()}>
            Increment Count
        </IonButton>
        <IonButton expand="block" onClick={() => onDismiss()}>
            Close
        </IonButton>
    </div>
);

const ModalExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDismiss = () => {
        dismiss();
    };

    /**
     * First parameter is the component to show, second is the props to pass
     */
    const [present, dismiss] = useIonModal(Body, {
        count,
        onDismiss: handleDismiss,
        onIncrement: handleIncrement,
    });

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonButton
                    expand="block"
                    onClick={() => {
                        present({
                            cssClass: 'my-class',
                        });
                    }}
                >
                    Show Modal
                </IonButton>
                <div>Count: {count}</div>
            </IonContent>
        </IonPage>
    );
};