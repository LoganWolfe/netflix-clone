import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.apiKey,

    authDomain: process.env.authDomain,

    projectId: process.env.projectId,

    storageBucket: process.env.storageBucket,

    messagingSenderId: process.env.messagingSenderId,

    appId: process.env.appId,

    measurementId: process.env.measurementId
};

const firebase  = Firebase.initializeApp(config);

export { firebase };