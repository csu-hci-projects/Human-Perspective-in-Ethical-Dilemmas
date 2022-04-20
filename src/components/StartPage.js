
import React from "react";
import { Navigate } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    main: {
        width: 'auto',
        height: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginTop: theme.spacing.unit * 20
    },
    paper: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    submit: {
        marginTop: theme.spacing.unit * 5,
    },
})


class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleBeginExperiment = this.handleBeginExperiment.bind(this);
        this.state = {
            isButtonPressed: false,
        }
    }
    handleBeginExperiment(e) {
        e.preventDefault();
        console.log("Button Clicked")
        this.setState({isButtonPressed:true})
    }

    render() {
        const { classes } = this.props;
        console.log("HII")
        if (this.state.isButtonPressed) {
            return <Navigate to="/surveyform" />
        }
        return (
            <div className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper} elevation={12}>
                    <form className={classes.form} onSubmit={this.handleBeginExperiment}>
                        <Typography color='primary' component="h1" variant="h5">
                            WELCOME
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Begin Experiment
                        </Button>
                    </form>
                </Paper>
            </div>
        )
    }
}


export default withStyles(styles)(StartPage);