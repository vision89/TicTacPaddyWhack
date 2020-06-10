import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/Game.js';
import Home from './Components/Home.js';
import ChooseGame from './Components/ChooseGame.js';
import Firebase, { FirebaseContext } from './Components/Data/FirebaseModule';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <div>
          <FirebaseContext.Consumer>
              {firebase => {
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              return (
                <Switch>
                  <Route path="/game">
                    <Game firebase={firebase} />
                  </Route>
                  <Route path="/choose_game">
                    <ChooseGame firebase={firebase} />
                  </Route>
                  <Route path="/">
                    <Home firebase={firebase} />
                  </Route>
                </Switch>);
              }}
          </FirebaseContext.Consumer>
          </div>
        </Router>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
