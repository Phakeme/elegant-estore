import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 392,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Hero = () => {
    const classes = useStyles();
    return (
        <Container style={{background: '', marginTop:'76px'}}>
        <Grid container spacing={2} className={classes.root}>
            {/* {[0,1,2,3,4,5].map((_,index)=>(
              <Grid key={index} item xs={2}>
              <Paper className={classes.paper}>
              <p>Item {index+1}</p>
              </Paper>
          </Grid>  
            ))} */}
            <Grid item xs={2}>
                <Paper className={classes.paper}>
                <p>Item 1</p>
                </Paper>
            </Grid>
            <Grid item xs={8}>
            <Paper className={classes.paper}>
                <p>Item 1</p>
                </Paper>
            </Grid>
            <Grid item xs={2}>
            <Paper className={classes.paper}>
                <p>Item 1</p>
                </Paper>
            </Grid>
        </Grid>
        </Container>
    )
}

export default Hero
