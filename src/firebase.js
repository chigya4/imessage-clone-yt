import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDh4ORTmgCGC_NA5cXaP8q0gSj3jvzybkA",
    authDomain: "imessage-clone-yt-9d63c.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt.firebaseio.com",
    projectId: "imessage-clone-yt-9d63c",
    storageBucket: "imessage-clone-yt-9d63c.appspot.com",
    messagingSenderId: "128727536015",
    appId: "1:128727536015:web:b4828e84ba57be223a3bfa",
    measurementId: "G-RM7MC03B77"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;