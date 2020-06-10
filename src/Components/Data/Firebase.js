import app from 'firebase/app';
import { v1 as uuidv1 } from 'uuid';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  // Initialize Firebase
  class Firebase {

    constructor() {
      try {

        app.initializeApp(config);
        app.analytics();

      } catch(err) {

        // Skip error if it's already exists error, this happens on reload
        if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack)
        }
        
      }
      
    }

    createGame() {

      const uuid = uuidv1();

      alert(uuid);

    }

  }
 
export default Firebase;