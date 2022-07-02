import React from 'react'
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'

const SearchInputOrganization: React.FC<{ setOrganization: any; onSubmit: any }> = ({ setOrganization, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <IonItem>
                <IonLabel>Look for an organization</IonLabel>
            </IonItem>
            <IonItem>
                <IonInput type="text" onIonChange={(e: any) => setOrganization(e.target.value)} />
            </IonItem>
            <IonItem>
                <IonButton type="submit">Search</IonButton>
            </IonItem>
        </form>
    )
}

export default SearchInputOrganization
