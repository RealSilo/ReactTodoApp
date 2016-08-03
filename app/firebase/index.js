import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC92pmr3Sqky9W0Ygw07viA7Qv8t5dU1OI",
    authDomain: "todoappsilo.firebaseapp.com",
    databaseURL: "https://todoappsilo.firebaseio.com",
    storageBucket: "todoappsilo.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;