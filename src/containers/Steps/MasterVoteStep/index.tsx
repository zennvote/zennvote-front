import React, { FC, useState } from 'react';
import { Typography, Divider, TextField, Button } from '@material-ui/core';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeVote } from '../../../store/modules/vote';
import { RootState } from '../../../store/modules';
import { useSnackbar } from 'notistack';
import { MasterVoteCard } from '../../../components';

interface MasterVoteStepProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const MasterVoteStep: FC<MasterVoteStepProps> = ({ onPrevStep, onNextStep }) => {
  const classes = styles();
  const vote = useSelector((state: RootState) => state.vote);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const [master, setMaster] = useState<string[] | undefined>(undefined);

  const handleNextStep = () => {
    if (!master || master.length === 0) {
      enqueueSnackbar('유종의 미를 거둬주세요.', { variant: 'error' });
      return;
    }
    dispatch(changeVote({ master }));
    onNextStep();
  }

  return (
    <div>
      <Typography className={classes.typo}>
        당신의 손으로 '전직 프로듀서 출신 아이돌'을 만들고 싶은 그분은 누구?!
      </Typography>
      <Typography className={classes.typo}>
        당신에게 주어진 명함은 총 3장입니다. 그중 1장만 쓸 수도 있고, 3장을 모두 쓸 수도 있습니다-
      </Typography>
      <Typography className={classes.typo}>
        <b>유닛 투표 불가, 명예프로듀서 투표 불가.</b>
      </Typography>
      <Divider className={classes.divider} />
      <MasterVoteCard onChange={setMaster} defaultValue={vote.master} />
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

export default MasterVoteStep;