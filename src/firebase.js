import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnGlkZa6veCeoLIB7p986UBgr-HZp7DE0",
    authDomain: "twitter-clone-ad26a.firebaseapp.com",
    projectId: "twitter-clone-ad26a",
    storageBucket: "twitter-clone-ad26a.appspot.com",
    messagingSenderId: "171381204456",
    appId: "1:171381204456:web:50dd32826341da425e305d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;