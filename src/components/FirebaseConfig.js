import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyDU9OdABisQ0STEMGWv_zUuy295itNd3Qg",
    authDomain: "pop-that-bio.firebaseapp.com",
    databaseURL: "https://pop-that-bio.firebaseio.com",
    projectId: "pop-that-bio",
    storageBucket: "pop-that-bio.appspot.com",
    messagingSenderId: "72526939292",
    appId: "1:72526939292:web:6c274801d24ad124675959",
    measurementId: "G-S7KJ6SDLHJ"
};
let myFirebase = firebase.initializeApp(config);
const db = myFirebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

export {
  db
}