import React, { FC, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import styles from './styles';
import { QuizContainer } from '../..';
import { useSnackbar } from 'notistack';
import { RootState } from '../../../store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { changeVote } from '../../../store/modules/vote';

interface QuizStepProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const QuizStep: FC<QuizStepProps> = ({ onNextStep, onPrevStep }) => {
  const classes = styles();
  
  const vote = useSelector((state: RootState) => state.vote);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const [results, setResults] = useState<number[] | undefined>(undefined);

  const handleNextStep = () => {
    if (!results)
      return;

    if (results.includes(-1)) {
      enqueueSnackbar('아직 선택하지 않은 항목이 있습니다. 확인해주세요.', { variant: 'error' });
      return;
    }

    dispatch(changeVote({ problem: results }));
    onNextStep()
  };

  return (
    <div>
      <Typography className={classes.typo}>
        대충 막 되는대로 아무 회차나 번호 적고 나서 음원만 쏙 얻고 빠지려는 얌체족을 거르기 위한
        <br />81회~90회차에 걸친 노래자랑 퀴즈!
      </Typography>
      <Typography className={classes.typo}>
        <b>9문제 중에 5개 이상</b> 맞힌 사람에게만 음원 배포 예정! (문제당 10점, 50점 이상 획득)
      </Typography>
      <Typography className={classes.typo}>
        만점받으려고 넘 걱정하지 마세요 50점 이상이면 다 됩니다.
        <br /> 만점 받은 거 누군지도 안 찾아보고 칭찬도 따로 안 해줌.
      </Typography>
      <Typography className={classes.typo}>
        외워서 하실 필요 없고 어디서 이 답을 찾을 수 있는지 안다면 됩니다. 오픈북 테스트 같은 거라구
      </Typography>
      <QuizContainer defaultValue={vote.problem} onChange={setResults} />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="default" onClick={() => onPrevStep()}>
          이전
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default QuizStep;