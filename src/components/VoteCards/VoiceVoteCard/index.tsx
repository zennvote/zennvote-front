import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import Vote from '../../VotePolls/EpisodeVotePolls/Vote';

interface VoiceVoteCardProps {
  onChange: (values: Vote[]) => void;
}

const VoiceVoteCard: FC<VoiceVoteCardProps> = ({ onChange }) => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          두번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          이 목소리 실화..?! <b>멋진 목소리의 프로듀서 상</b>
        </Typography>
        <Typography className={classes.typo}>
          내가 생각하기에 가장 멋지거나 아름답다고 생각하는 목소리를 지닌 프로듀서분을 뽑아주세요.
          <br />최소 1명부터 최대 5명까지 쓰실 수 있습니다.
        </Typography>
        <Typography className={classes.typo}>
          <b>타부문과 중복투표 불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <EpisodeVotePolls count={5} onChange={onChange} />
      </CardContent>
    </Card>
  )
};

export default VoiceVoteCard;