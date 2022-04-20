
import React from "react";
import { Navigate } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    main: {
        width: "auto",
        height: 'auto',
        display: 'block', // Fix IE 11 issue.
        minWidth: 540,
        // marginLeft: theme.spacing.unit * 3,
        // marginRight: theme.spacing.unit * 3,
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
        minWidth: 540,
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        // width: '100%', // Fix IE 11 issue.
        minWidth: 500,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    submit: {
        marginTop: theme.spacing.unit * 5,
    },
})


class FinalPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitExperiment = this.handleSubmitExperiment.bind(this);
        this.state = {
            isButtonPressed: false,
        }
    }
    handleSubmitExperiment(e) {
        e.preventDefault();
        console.log("Button Clicked")
        this.setState({isButtonPressed:true})

    }

    render() {
        const { classes } = this.props;
        console.log("HII")
        if (this.state.isButtonPressed) {
            return <Navigate to="/" />
        }
        return (
            <div className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper} elevation={12}>
                    <form className={classes.form} onSubmit={this.handleSubmitExperiment}>
                        <Typography color='primary' component="h1" variant="h5">
                            Thankyou for contributing to Science!
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            End Experiment
                        </Button>
                    </form>
                </Paper>
            </div>
        )
    }
}


export default withStyles(styles)(FinalPage);