import React from 'react'
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'

const SearchInput: React.FC<{ setUser: any; onSubmit: any }> = ({ setUser, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <IonItem>
                <IonLabel>Look for a user</IonLabel>
            </IonItem>
            <IonItem>
                <IonInput type="text" onIonChange={(e: any) => setUser(e.target.value)} />
            </IonItem>
            <IonItem>
                <IonButton type="submit">Search</IonButton>
            </IonItem>
        </form>
    )
}

export default SearchInput
