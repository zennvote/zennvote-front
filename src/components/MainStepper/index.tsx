import React, { FC, useState } from 'react';

import { Stepper, Step, StepLabel, Typography, StepContent, Button } from '@material-ui/core';

import styles from './styles'
import { PageStepData } from '../../entities/PageStepData';
import { InfoStep } from '../../containers';

interface MainStepperProps { }

const steps: PageStepData[] = [
  { title: '투표 안내', content: <InfoStep /> },
]

const MainStepper: FC<MainStepperProps> = () => {
  const classes = styles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {
        steps.map(({ title, content }) => (
          <Step key={0}>
            <StepLabel>
              <Typography className={classes.labelTypo} variant="h6">
                <b>{ title }</b>
              </Typography>
            </StepLabel>
            <StepContent>
              { content }
              <div className={classes.actionRoot}>
                { activeStep !== 0 && 
                <Button className={classes.button} onClick={() => setActiveStep(activeStep - 1)}>
                  뒤로가기
                </Button>
                }
                <Button className={classes.button} variant="contained" color="primary" onClick={() => setActiveStep(activeStep + 1)}>
                  { activeStep === steps.length - 1 ? '마치기' : '다음' }
                </Button>
              </div>
            </StepContent>
          </Step>
        ))
      }
    </Stepper>
  )
};

export default MainStepper;