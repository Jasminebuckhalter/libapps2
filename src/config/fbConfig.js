import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFySdZuyjS2MrYgj3Q44u1Zo2p8_u7O5Y",
    authDomain: "libappjab.firebaseapp.com",
    databaseURL: "https://libappjab.firebaseio.com",
    projectId: "libappjab",
    storageBucket: "libappjab.appspot.com",
    messagingSenderId: "145797729325"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
