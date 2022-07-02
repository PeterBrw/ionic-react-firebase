import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
} from "@ionic/react";
import React from "react";

const SideMenu = () => {
    return (
        <IonMenu side="end" contentId="main">
            <IonHeader>
                <IonToolbar color="light">
                    <IonTitle>MENU</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/search"} routerDirection="none">
                            <IonLabel>Search</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/repos"} routerDirection="none">
                            <IonLabel>Repositories</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/search-organization"} routerDirection="none">
                            <IonLabel>Search Organization</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/settings"} routerDirection="none">
                            <IonLabel>Settings</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/"} routerDirection="none">
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default SideMenu;