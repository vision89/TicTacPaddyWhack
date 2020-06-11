import app from 'firebase/app';
import { v1 as uuidv1 } from 'uuid';
import state from './State';
import 'firebase/database';
import 'firebase/analytics';

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
        this.db = app.database();

      } catch(err) {

        // Skip error if it's already exists error, this happens on reload
        if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack)
        }

      }
      
    }

    createGame() {

      try {

        const game = {
          playerOneUUID: uuidv1(),
          playerTwoUUID: uuidv1(),
          startedAt: (new Date()).toISOString(),
          moves: [],
          playerOneMove: true,
          state: 'AWAITING_PLAYER'
        };
  
        state.game = game;

        // Get a key for a new Post.
        const newGameKey = this.db.ref().child('games').push().key;
  
        // Write the new post's data simultaneously in the posts list and the user's post list.
        let updates = {};
        updates['/games/' + newGameKey] = game;

        this.db.ref().update(updates);

      } catch(ex) {
        console.log('Exception: ', ex);
      }

    }

  }
 
export default Firebase;