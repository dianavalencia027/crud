import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuKXc9mJJcY-3Exk-1zKHPDOLXn_2lQAo",
    authDomain: "crud-50e05.firebaseapp.com",
    projectId: "crud-50e05",
    storageBucket: "crud-50e05.appspot.com",
    messagingSenderId: "1043659889180",
    appId: "1:1043659889180:web:13385587c07ae3749c5dd9"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)