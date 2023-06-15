import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUldmZpwt-TQQi8SLKvW4oKLrci0YVQ0M",
  authDomain: "mc-donald-c6880.firebaseapp.com",
  projectId: "mc-donald-c6880",
  storageBucket: "mc-donald-c6880.appspot.com",
  messagingSenderId: "452709558442",
  appId: "1:452709558442:web:e1c98397a7d1470f4108d3"
};

export const initFirebase = initializeApp(firebaseConfig);