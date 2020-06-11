import React from 'react';
import state from './Data/State';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: state.game
        };

        console.log('game state: ', state.game);
    }

    render() {
        return (<div>Hello World Game</div>);
    }
}

export default Game;