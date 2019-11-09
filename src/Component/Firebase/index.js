import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0WsBKeedWAuMsRMLeyHHFL6Y9_WVW2yA",
    authDomain: "opwproject-c7a0b.firebaseapp.com",
    databaseURL: "https://opwproject-c7a0b.firebaseio.com",
    projectId: "opwproject-c7a0b",
    storageBucket: "",
    messagingSenderId: "271023480655",
    appId: "1:271023480655:web:4f46d001b8552a066d2f3a"
};

 firebase.initializeApp(config);
const dbSyncRoot = firebase.database().ref();
const auth = firebase.auth();
const dbUsers = dbSyncRoot.child('users');

export {
    auth,
    dbUsers,
}
