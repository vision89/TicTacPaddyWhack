import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Home(props) {

    //const classes = useStyles();
    return (
        <Card className="home-card">
            <CardContent className="content">
                <div className="header">
                    <Typography className="title">
                        <strong>Welcome to Tic-Tac Paddy Whack!</strong>
                    </Typography>
                    <Typography className="secondary">
                        A variation of tic-tac-toe in which you "paddy whack" an opponent by deleting one of their moves each turn after four moves
                    </Typography>
                </div>
                <div className="buttons">
                    <CardActions>
                        <Button className="button" variant="contained" color="primary" href="game" onClick={() => props.firebase.createGame()}>Start a Game</Button>
                        <Button className="button" variant="contained" color="secondary" href="choose_game">Find a Game</Button>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    );
}

export default Home;