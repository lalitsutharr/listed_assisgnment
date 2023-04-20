import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAavQFS9ehlF64akTebY-Y5xYYXkZx3b4U",
  authDomain: "react-dashboard-listed.firebaseapp.com",
  projectId: "react-dashboard-listed",
  storageBucket: "react-dashboard-listed.appspot.com",
  messagingSenderId: "913860874979",
  appId: "1:913860874979:web:e4fa169f31e9cafdd02bd6",
  measurementId: "G-NQ7EJ17V6F",
  databaseURL: "https://react-dashboard-listed-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
