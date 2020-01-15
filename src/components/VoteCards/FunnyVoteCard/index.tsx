import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import Vote from '../../VotePolls/EpisodeVotePolls/Vote';

interface FunnyVoteCardProps {
  onChange: (values: Vote[]) => void;
}

const FunnyVoteCard: FC<FunnyVoteCardProps> = ({ onChange }) => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          세번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          나를 미친듯이 웃게 한 <b>최고의 예능 프로듀서 상</b>
        </Typography>
        <Typography className={classes.typo}>
          최소 1명부터 최대 2명까지 쓰실 수 있습니다.
        </Typography>
        <Typography className={classes.typo}>
          <b>타부문과 중복투표 불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <EpisodeVotePolls count={2} onChange={onChange} />
      </CardContent>
    </Card>
  )
};

export default FunnyVoteCard;