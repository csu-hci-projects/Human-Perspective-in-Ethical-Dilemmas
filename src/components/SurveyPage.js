import React from 'react';
import { withStyles, Typography, Paper, Button, Divider, TextField, Select, Input, MenuItem, FormControl, InputLabel, FormHelperText} from '@material-ui/core';
import { Navigate } from "react-router-dom";


const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '94%',
        },
        maxWidth: 520,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4*theme.spacing.unit,
        border: '1px solid #eaeaea',
        minHeight:'90px',
        borderRadius: theme.spacing.unit,
        marginTop: 4*theme.spacing.unit,
    },

    form: {
        marginRight: 2*theme.spacing.unit,
        marginLeft: 2*theme.spacing.unit,
        marginTop: theme.spacing.unit*2,
        marginBottom: theme.spacing.unit, 
    },
    formControl: {
        
        marginTop: theme.spacing(1),
        marginBottom:theme.spacing(1),
        minWidth: 200,
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(2),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    box: {
        paddingTop: theme.spacing.unit,
        paddingBottom :theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    btn: {
        margin: theme.spacing.unit*2
    }

});


class SurveyPage extends React.Component
{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isSubmitPressed: false,
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("Button Clicked")
        this.setState({isSubmitPressed:true})
    }
   
  
 
    render(){
        const { classes } = this.props;
        if (this.state.isSubmitPressed) {
            return <Navigate to="/survey" />
        }

        return (
            <Paper className={classes.root}>
               
                <Divider/>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <Typography color='secondary' component="h1" variant="h5">
                                    Demographics Survey
                    </Typography>
                    

                    <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Gender
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='m'>Male</MenuItem>
                            <MenuItem value='f'>Female</MenuItem>
                            <MenuItem value='o'>Other</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Ethnicity
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='white'>white</MenuItem>
                            <MenuItem value='ai'>American Indian</MenuItem>
                            <MenuItem value='asia'>Asian</MenuItem>
                            <MenuItem value='me_na'>Middle Eastern  or North African</MenuItem>
                            <MenuItem value='nh_op'>Native Hawaiian or Other Pacific</MenuItem>
                            <MenuItem value='b_aa'>Black or African American</MenuItem>
                            <MenuItem value='hl_so'>Hispanic Latino or Spanish Origin</MenuItem>
                            <MenuItem value='oth'>Other</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Age
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='a'>0-17</MenuItem>
                            <MenuItem value='b'>18-24</MenuItem>
                            <MenuItem value='c'>25-34</MenuItem>
                            <MenuItem value='d'>35-44</MenuItem>
                            <MenuItem value='e'>45-54</MenuItem>
                            <MenuItem value='f'>55-64</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Education
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='a'>Less than HS diploma</MenuItem>
                            <MenuItem value='b'>High school</MenuItem>
                            <MenuItem value='c'>Some college</MenuItem>
                            <MenuItem value='d'>Bachelors Degree</MenuItem>
                            <MenuItem value='e'>Graduate Degree</MenuItem>
                            <MenuItem value='f'>Higher Education</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl required className={classes.formControl}>
                    <Typography >
                                    How are you doinf this Experiment:
                    </Typography>

                        
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='a'>Default</MenuItem>
                            <MenuItem value='b'>Web Browser</MenuItem>
                            <MenuItem value='c'>Mobile App</MenuItem>

                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                   
                   
        
                   
                    <Button type="submit" className={classes.box}   variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>

                </form>
            </Paper>
        );
    
    }
}

export default withStyles(styles)(SurveyPage);