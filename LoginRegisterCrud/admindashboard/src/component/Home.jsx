import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import w1 from './w1.jpg'
import w2 from './w2.jpg'
import w3 from './w3.webp'
import w4 from './w4.jpg'
import w5 from './w5.jpg'
import w6 from './w6.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    // label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      w1,
  },
  {
    // label: 'Bird',
    imgPath:
     w2,
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      w3
  },
  {
    // label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      w4,
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      w5,
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      w6,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 700,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width:'100%',
    justifyItems:'center'
  
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        {/* <Typography>{tutorialSteps[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
    </div>
  );
}

export default Home;
