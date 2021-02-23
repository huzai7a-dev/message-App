import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCgqYOeAk0DwdL2Oq9ohVXO05JvJlJhyo8",
    authDomain: "messenger-f2c12.firebaseapp.com",
    projectId: "messenger-f2c12",
    storageBucket: "messenger-f2c12.appspot.com",
    messagingSenderId: "38784341434",
    appId: "1:38784341434:web:14049063aeeba156c7f983"
};
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export default db;