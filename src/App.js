import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/Game.js';
import Home from './Components/Home.js';
import CreateGame from './Components/CreateGame.js';
import ChooseGame from './Components/ChooseGame.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/create_game">
              <CreateGame />
            </Route>
            <Route path="/choose_game">
              <ChooseGame />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
