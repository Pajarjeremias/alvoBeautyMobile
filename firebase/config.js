import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDM-j5gXWzCPxAHg34uVtbltAFepjE3Mmo",
    authDomain: "abauth-2a53b.firebaseapp.com",
    databaseURL: "https://abauth-2a53b-default-rtdb.firebaseio.com",
    projectId: "abauth-2a53b",
    storageBucket: "abauth-2a53b.firebasestorage.app",
    messagingSenderId: "606854643095",
    appId: "1:606854643095:web:92c74909150ef746ed98d2",
    measurementId: "G-G8M27M2HTC",
   
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
