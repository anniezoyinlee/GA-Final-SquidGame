import firebase from 'firebase/compat/app' 
import 'firebase/compat/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyBrWrjNuZh4xScca_VFit4OzLi2CXDGf2Y",
  authDomain: "final-squid-game.firebaseapp.com",
  projectId: "final-squid-game",
  storageBucket: "final-squid-game.appspot.com",
  messagingSenderId: "552016248879",
  appId: "1:552016248879:web:1535554d838cfaf16c86da",
  measurementId: "G-V97H1HHLJB"
}

firebase.initializeApp(firebaseConfig)

export default firebase