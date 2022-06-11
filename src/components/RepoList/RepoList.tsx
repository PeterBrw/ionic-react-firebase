import {
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonInput,
    IonCheckbox,
    IonRadio,
    IonToggle

} from '@ionic/react'

const RepoList: React.FC = () => {
    return (
        <>
            <IonList>
                <IonItemSliding>
                    <IonItem>
                        <IonLabel>Item</IonLabel>
                    </IonItem>
                    <IonItemOptions side="start">
                        <IonItemOption onClick={() => {}}>Unread</IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>

                <IonItemSliding>
                    <IonItem>
                        <IonLabel>Item</IonLabel>
                    </IonItem>
                    <IonItemOptions side="end">
                        <IonItemOption onClick={() => {}}>Unread</IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
                <IonList>
                    <IonItem>
                        <IonLabel>Input</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Toggle</IonLabel>
                        <IonToggle slot="start"></IonToggle>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Radio</IonLabel>
                        <IonRadio slot="end"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Checkbox</IonLabel>
                        <IonCheckbox slot="start" />
                    </IonItem>
                </IonList>
            </IonList>
        </>
    )
}

export default RepoList
