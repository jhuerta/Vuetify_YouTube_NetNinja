import firebase from "firebase/app";
import "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHTSDPvz6qpaJDuLgXZMS2pTfgj05bzZk",
  authDomain: "todo-ninja-57ff9.firebaseapp.com",
  databaseURL: "https://todo-ninja-57ff9.firebaseio.com",
  projectId: "todo-ninja-57ff9",
  storageBucket: "todo-ninja-57ff9.appspot.com",
  messagingSenderId: "991216231490"
};
firebase.initializeApp(config);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });
export default db;
