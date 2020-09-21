import * as firebase from 'firebase'

import 'firebase/firestore'
var config = {
  apiKey: "AIzaSyD28ylY1dZwcrdYon8CmScGMZkBLXuGOq8",
  authDomain: "vue3-firewall-test.firebaseapp.com",
  databaseURL: "https://vue3-firewall-test.firebaseio.com",
  projectId: "vue3-firewall-test",
  storageBucket: "vue3-firewall-test.appspot.com",
  messagingSenderId: "356898943747",
  appId: "1:356898943747:web:78ef6ac166b84a9b882f36",
  measurementId: "G-THNFHCM02G"
};

var firebaseApp = firebase.default.initializeApp(config);

export const db = firebaseApp.firestore();
window.db = db;
