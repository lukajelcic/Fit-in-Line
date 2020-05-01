import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCChfFbDsrX0Lq3pKCUjt1QWxmJuW8u8X0",
    authDomain: "fit-in-line.firebaseapp.com",
    databaseURL: "https://fit-in-line.firebaseio.com",
    projectId: "fit-in-line",
    storageBucket: "fit-in-line.appspot.com",
    messagingSenderId: "452591492077",
    appId: "1:452591492077:web:00f77315b5e3bbcf83e5e4",
    measurementId: "G-V18HSSWLMF"
}

firebase.initializeApp(config);
export default config;