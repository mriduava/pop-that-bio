import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDU9OdABisQ0STEMGWv_zUuy295itNd3Qg",
    authDomain: "pop-that-bio.firebaseapp.com",
    databaseURL: "https://pop-that-bio.firebaseio.com",
    projectId: "pop-that-bio",
    storageBucket: "pop-that-bio.appspot.com",
    messagingSenderId: "72526939292",
    appId: "1:72526939292:web:6c274801d24ad124675959"
};

firebase.initializeApp(config);
export const db = firebase.firestore();
