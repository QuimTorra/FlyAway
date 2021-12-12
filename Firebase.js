import * as firebase  from "firebase/app";

// Use your config values here.
const firebaseConfig = {
    apiKey: "AIzaSyCmK3L7M1EDJaF4Q8BC38LkITgGcUKsqAs",
    authDomain: "bd-absurritsdev.firebaseapp.com",
    databaseURL: "https://bd-absurritsdev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bd-absurritsdev",
    storageBucket: "bd-absurritsdev.appspot.com",
    messagingSenderId: "796101250900",
    appId: "1:796101250900:web:983eb0dc40703514cbc2c1",
    measurementId: "G-E7H3KXY9N1"
};

export default firebase.initializeApp(firebaseConfig);