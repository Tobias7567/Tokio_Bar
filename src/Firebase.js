import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCiMaq0BtdiEICeB4LOgcO2xjeGbUHam4Q",
  authDomain: "bar-70bd7.firebaseapp.com",
  projectId: "bar-70bd7",
  storageBucket: "bar-70bd7.appspot.com",
  messagingSenderId: "497422199953",
  appId: "1:497422199953:web:a9b198237affcd3a416330"
};


const app = initializeApp(firebaseConfig);
 export const Dat = getFirestore(app)

