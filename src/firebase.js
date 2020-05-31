import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDWbsXctHXT0HlBBsGIENjWRDGaZltUk0M",
    authDomain: "react-slack-1a708.firebaseapp.com",
    databaseURL: "https://react-slack-1a708.firebaseio.com",
    projectId: "react-slack-1a708",
    storageBucket: "react-slack-1a708.appspot.com",
    messagingSenderId: "549193184282",
    appId: "1:549193184282:web:af402ffdac838993c40da3",
    measurementId: "G-48XECB2V60"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export default firebase;