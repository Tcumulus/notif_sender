import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOwFQr288on0tDgslvYZwj5tokESjMBrc",
  authDomain: "notif-3f3a9.firebaseapp.com",
  projectId: "notif-3f3a9",
  storageBucket: "notif-3f3a9.appspot.com",
  messagingSenderId: "169907874505",
  appId: "1:169907874505:web:84bd6ad913024ade97bb18"
}

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()

export {projectFirestore}