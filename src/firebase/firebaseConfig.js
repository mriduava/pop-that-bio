import firebase from 'firebase'
import 'firebase/firestore'

// // Initialize Firebase
// let config = {
//     apiKey: "AIzaSyDU9OdABisQ0STEMGWv_zUuy295itNd3Qg",
//     authDomain: "pop-that-bio.firebaseapp.com",
//     databaseURL: "https://pop-that-bio.firebaseio.com",
//     projectId: "pop-that-bio",
//     storageBucket: "pop-that-bio.appspot.com",
//     messagingSenderId: "72526939292",
//     appId: "1:72526939292:web:6c274801d24ad124675959",
//     measurementId: "G-S7KJ6SDLHJ"
// };
// let myFirebase = firebase.initializeApp(config);
// const db = myFirebase.firestore();

// db.settings({
//   timestampsInSnapshots: true
// });

// export {
//   db
// }


const config = {
    apiKey: "AIzaSyCxIFW4Pl0ya3Wgz2PtmR_tyMz25o0PjME",
    authDomain: "filmava-ad444.firebaseapp.com",
    databaseURL: "https://filmava-ad444.firebaseio.com",
    projectId: "filmava-ad444",
    storageBucket: "filmava-ad444.appspot.com",
    messagingSenderId: "721864151766",
    appId: "1:721864151766:web:55b2ff5b884d58b4672f77"
};

firebase.initializeApp(config);
export const db = firebase.firestore();
