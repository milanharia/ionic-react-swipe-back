import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nested Page 2</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/nested1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Nested Page 2" />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
