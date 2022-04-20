import React from "react";
import { withStyles, Typography, Paper, Button, Divider, TextField, Select, Input, MenuItem, FormControl, InputLabel, FormHelperText} from '@material-ui/core';
import { Navigate } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';


var firstImage = require('./../Asserts/img1.png')
var secondImage =  require('./../Asserts/img2.png')

const styles = theme => ({
    temp: {
        [theme.breakpoints.down('sm')]: {
            width: '94%',
        },
        padding: 4*theme.spacing.unit,
        maxWidth: 980,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4*theme.spacing.unit,
        border: '1px solid #eaeaea',
        minHeight:'90px',
        borderRadius: theme.spacing.unit,
        marginTop: 4*theme.spacing.unit,
    },
    img:{
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
  main: {
    margin: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  someDivision:{
    textAlign: 'center'
  },
  progress: {
    marginBottom: theme.spacing.unit * 5,
  },
  btn: {
    margin: theme.spacing.unit*2

  },
  formControl: {
    marginBottom:theme.spacing(1),
    minWidth: 200,
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(5),
  },
});


class ExperimentPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      instructions: true,
      questionNumber: null,
      isButtonPressed: false,
      count: 0,
      timer:[90,60],
      images:["img1.jpg","img2.jpg"],
      question_options:[[{id:0, name: "Save the Baby"},{id: 1,name: "Save the men"}],[{id:0,name:"Mother"},{id:0, name:"Veteran"}]],
      question:["Imagine you are walking in a Neighborhood and you see a building on fire, you rush into save the people inside through the smoke, you spot a stroller with what looks like a baby on It. On the far side of the room you see an unconcious grown man lying on the floor. The Flames are raising and you can hear that the sealing is about to collapse. You only have to save one. Whom do you save?",
    "Pretend you are the brains behind the self driving car, the breaks suddenly stopped working, the car is accelerating towards the crosswalk. You have two options. Option 1 is to continue forward and crash into a mother carrying hear two babies in her arms. Option 2 is to Swear on other lane and kill an US veterant "],
      survey_questions: ["Which of the following factors Influenced your Decision?","Which matter to you most?"],
      survey_question_answers: [[{id: "time", name: "time"},{id: "age", name: "age"}],[{id :0, name: "Saving More Lives"},{id: 1, name: "Saving 1 Life"},{id : 2, name: "Saving a mother"},{ id: 3, name : "Saving a baby"},{id: 4, name: "Saving Young"},{id: 5, name: "saving Old"}]]
    }
  }

  

   componentDidMount() {
     this.myInterval = setInterval(() => {
      this.setState(prevState =>({
        count: prevState.count+1
      }))
    }, 1000)
     }
  
     

  render() {
    const { classes } = this.props;
    const {count} = this.state.count;
    const image = (this.state.questionNumber == 1) ? firstImage : secondImage
    if((this.state.instructions)) {
      return(
          <div className={classes.temp}>
              <Typography color='secondary' component="h1" variant="h5">
                    Instructions(READ CAREFULLY)
                </Typography>
              <p>For this experiment, there are 3 timed scenarios to complete. For each sceanario, you will have 90 seconds to listen to the given sceanario and make your final choice </p>
              <p> After each sceanario, you will be prompted on your after-thoughts about the sceanario that you just completed.</p>
          
              <Button type="submit" onClick = {() => {this.setState({instructions:false, questionNumber:1})}} className={classes.btn}   variant="contained" >
                        Begin Experiment
            </Button>
          
          </div>
      )
    } 
    if((this.state.questionNumber == 3)) {
      return <Navigate to="/submitSurvey" />
    } 

    // if((this.state.count == 0)) {
    //   // this.setState({isButtonPressed: false, questionNumber: this.state.questionNumber+ 1, count: 0})
    // } 
    let options = this.state.survey_question_answers[this.state.questionNumber-1]
   
    let optionsList = options.length > 0
      && options.map((item, i) => {
        
      return (
        <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
      )
    }, this);

    let so = this.state.question_options[this.state.questionNumber-1]
    
    let soList = so.length > 0
      && so.map((item, i) => {
      
      return (
        <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
      )
    }, this);

    //const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.zonalgrievances.length - this.state.page * this.state.rowsPerPage);
    return (
      <div className={classes.main}>
            {console.log(this.state.questionNumber)}
            {!this.state.isButtonPressed ?
            <Paper className={classes.temp}>
              <Typography color='secondary' component="h1" variant="h5">
                                   Welcome to Sceanario {this.state.questionNumber}
              </Typography>
              <Divider />

              <div className={classes.img}>
              <img src={image}/>
              </div>
              <Typography component="h6">
                You have {this.state.timer[this.state.questionNumber-1]} Seconds to answer this Scenario.
                  
              </Typography>
              <h1>Timer: {this.state.count}</h1>
              <p></p>
              <Typography component="h6" >
                {this.state.question[this.state.questionNumber-1]}
              </Typography>
              <p></p>

              <FormControl required className={classes.formControl}>
              Select any option before the timer runs out: 
                        <InputLabel>
                            Default
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            {soList}
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
              <p></p>
              
            <Button color='primary' type="submit" onClick = {() => {this.setState({isButtonPressed: true})}} className={classes.btn}   variant="contained" >
                        Next
            </Button>
            </Paper>
            :
            <Paper className={classes.temp}>
               <Typography color='secondary' component="h1" variant="h5">
                                    Question 1
                </Typography>
                <Typography variant="h6">
                    Would your Answer change if you had more time to think?
                </Typography>
              <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Default
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div>
                    <Typography color='secondary' component="h1" variant="h5">
                                    Question 2
                    </Typography>
                    <Typography variant="h6">
                      {this.state.survey_questions[this.state.questionNumber -1]}
                    </Typography>
                    <FormControl required className={classes.formControl}>
                        <InputLabel>
                            Select from dropdown
                        </InputLabel>
                        <Select
                           
                            displayEmpty
                            name="type"
                            className={classes.selectEmpty}
                        >   
                            {optionsList}
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    </div>
            <Button type="submit" onClick = {() => {this.setState({isButtonPressed: false, questionNumber: this.state.questionNumber+ 1, count: 0})}} className={classes.btn}   variant="contained" >
                        {this.state.questionNumber ==2 ? 
                        "Submit"
                        :
                        "Next question"
                        }
            </Button>
            </Paper>
            }
      </div>

    )
  }
}




export default withStyles(styles)((ExperimentPage));