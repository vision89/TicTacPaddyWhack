import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '12%',
        backgroundColor: '#FFF7FF',
    },
    title: {
        fontSize: '2em',
    },
    secondary: {
        fontSize: '1em',
        color: 'dimgray'
    },
    buttons: {
        marginTop: '1em',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '63%',
    },
    button: {
        fontSize: '2em',
    }
};

function Home(props) {

    //const classes = useStyles();
    return (
        <Card style={styles.root}>
            <CardContent>
                <Typography style={styles.title}>
                    <strong>Welcome to Tic-Tac Paddy Whack!</strong>
                </Typography>
                <Typography style={styles.secondary}>
                    A variation of tic-tac-toe in which you "paddy whack" an opponent by deleting one of their moves each turn after four moves
                </Typography>
                <div style={styles.buttons}>
                    <CardActions>
                        <Button style={styles.button} variant="contained" color="primary" href="game" onClick={() => props.firebase.createGame()}>Start a Game</Button>
                        <Button style={styles.button} variant="contained" color="secondary" href="choose_game">Find a Game</Button>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    );
}

export default Home;