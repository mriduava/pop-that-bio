import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/firestore'
require('@firebase/auth');
require('@firebase/firestore');
import store from '@/store/index.js'
//import movies from '/firebase/MOCK_DATA.json'

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


firebase.auth().onAuthStateChanged(user => {
    store.dispatch('fetchUser', user);
  });

export const db = firebase.firestore();
export const aut = firebase.auth();


/*for (let movie of movies) {
  
}

const colMovies = db.collection('movies')*/

