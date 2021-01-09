import firebase from "firebase/app";
require("firebase/database");
var firebaseConfig = {
  apiKey: "AIzaSyC__PXA-5arMrlOuJBkrWmueIizqnVAWIA",
  authDomain: "overlay-twitch.firebaseapp.com",
  databaseURL: "https://overlay-twitch-default-rtdb.firebaseio.com",
  projectId: "overlay-twitch",
  storageBucket: "overlay-twitch.appspot.com",
  appId: "1:36578786705:web:0f8c43b8e950386654ae30",
};
export const db = firebase.initializeApp(firebaseConfig).database();
