import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nested Page 1</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Nested Page 1" />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" routerLink="/tab1/nested2">
            To nested page 2
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Page1;
