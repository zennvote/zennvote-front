import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';

interface PitchVoteCardProps {
}

const PitchVoteCard: FC<PitchVoteCardProps> = () => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          첫번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          이 성대가 대단하다! <b>가창력이 뛰어난 프로듀서 상</b>
        </Typography>
        <Typography className={classes.typo}>
          내 생각에 가장 가창력이 뛰어난 것 같다고 생각하는 프로듀서분을 뽑아주세요.
          <br />최소 1명부터 최대 5명까지 쓰실 수 있습니다.
        </Typography>
        <Typography className={classes.typo}>
          <b>타부문과 중복투표 불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <EpisodeVotePolls count={5} />
      </CardContent>
    </Card>
  )
};

export default PitchVoteCard;