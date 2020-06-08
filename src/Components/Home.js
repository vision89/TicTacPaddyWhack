import React from 'react';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2em'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '2em',
    },
    pos: {
        marginBottom: 12,
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //const classes = useStyles();
        return (
            <Card style={styles.root}>
                <CardContent>
                <Typography style={styles.title} color="textSecondary" gutterBottom>
                    Welcome to Tic-Tac Paddy Whack!
                </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Home;