import firebase from 'firebase/app';

import 'firebase/auth';




const firebaseConfig = {
  apiKey: "AIzaSyC6fJ6-8P3de9t6souZdFReWgashEA3sU0",
  authDomain: "filmaria-2c325.firebaseapp.com",
  projectId: "filmaria-2c325",
  storageBucket: "filmaria-2c325.appspot.com",
  messagingSenderId: "802936095828",
  appId: "1:802936095828:web:4c47bccba075f9281c19c1"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {firebase , auth}
