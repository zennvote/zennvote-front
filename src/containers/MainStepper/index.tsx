import React, { FC, useState, useMemo } from 'react';

import { Stepper, Step, StepLabel, Typography, StepContent } from '@material-ui/core';

import styles from './styles'
import { PageStepData } from '../../entities/PageStepData';
import { InfoStep, QuizStep, FieldVoteStep, PopVoteStep, MasterVoteStep, ConfirmStep, DumVoteStep } from '..';

interface MainStepperProps { }

const MainStepper: FC<MainStepperProps> = () => {
  const classes = styles();
  const [activeStep, setActiveStep] = useState(5);

  const steps = useMemo<PageStepData[]>(() => [
    { title: '투표 안내', content: <InfoStep onNextStep={() => setActiveStep(activeStep + 1)} /> },
    { title: '노래자랑 퀴즈!', content: <QuizStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)} /> },
    { title: '5개 부문 시청자 심사위원 투표', content: <FieldVoteStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)} /> },
    { title: '인기상', content: <PopVoteStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)}/> },
    { title: '대상 : 나의 명함을 주고 싶은 프로듀서 상', content: <MasterVoteStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)}/> },
    { title: '덤', content: <DumVoteStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)} /> },
    { title: '투표 확인', content: <ConfirmStep onNextStep={() => setActiveStep(activeStep + 1)} onPrevStep={() => setActiveStep(activeStep - 1)} />}
  ], [activeStep]);

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
            </StepContent>
          </Step>
        ))
      }
    </Stepper>
  )
};

export default MainStepper;