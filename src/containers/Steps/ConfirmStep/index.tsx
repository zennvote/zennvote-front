import React, { FC, useState, useEffect } from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { ConfirmList } from '../../../components';

interface ConfirmStepProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const ConfirmStep: FC<ConfirmStepProps> = ({ onNextStep, onPrevStep }) => {
  const classes = styles();
  const [isValidating, setValidating] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean | undefined>(undefined);

  const handleNextStep = () => {
    setValidating(true);
  }

  useEffect(() => {
    if (validation === undefined)
      return;

    setValidating(false);
    if (validation) {
      onNextStep();
      return;
    }

    setValidation(undefined);
  }, [validation]);

  return (
    <div>
      <Typography className={classes.typo}>
        마지막으로 자신이 투표한 항목들을 살펴보세요.
        <br /><b>이제 완료 버튼을 누를 시 취소할 수 없습니다!</b>
      </Typography>
      <Divider className={classes.divider} />
      <ConfirmList onValidate={setValidation} validateTrigger={isValidating} />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="default" onClick={() => onPrevStep()}>
          이전
        </Button>
        <Button className={classes.button} disabled={isValidating} variant="contained" color="primary" onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default ConfirmStep;