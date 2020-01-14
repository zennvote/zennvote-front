import React, { FC } from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { PopVoteCard, RookieVoteCard, GrowVoteCard, UnitVoteCard } from '../../components';

interface PopVoteStepProps {
  onNextStep: () => void;
}

const PopVoteStep: FC<PopVoteStepProps> = ({ onNextStep }) => {
  const classes = styles();
  return (
    <div>
      <Typography className={classes.infoTypo}>
        지난 시즌 대상 <b>태민</b>,
        <br />
        명예 프로듀서인 <b>라일락P와 큐에P, 류드P, 처빕P, 아토P, 초코와 EnRyu, 모함과, 히키코모리 및</b>
        <br />
        이분들이 <b>참여한 유닛</b>은 투표 대상이 <b>아닙니다</b>.
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.infoTypo}>
        앞서 부문에서 투표했던 프로듀서를 여기에서는 다시 투표 가능합니다.
        <br />
        중복은 부문상에서만 안 되는 거예요~
      </Typography>
      <Divider className={classes.divider} />
      <PopVoteCard />
      <RookieVoteCard />
      <GrowVoteCard />
      <UnitVoteCard />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => onNextStep()}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default PopVoteStep;