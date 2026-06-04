import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const addSubscription = async (subscriptionData) => {
  try {
    const docRef = await addDoc(
      collection(db, "subscriptions"),
      subscriptionData
    );

    console.log("Document added with ID:", docRef.id);

  } catch (error) {
    console.log("Error adding document:", error);
  }
};