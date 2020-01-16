import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import Vote from '../../VotePolls/EpisodeVotePolls/Vote';

interface OriginalVoteCardProps {
  defaultValue?: Vote[] | undefined;
  onChange: (values: Vote[]) => void;
}

const OriginalVoteCard: FC<OriginalVoteCardProps> = ({ onChange, defaultValue }) => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          다섯번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          진짜 그 아이돌이 부른 것 같아! <b>원곡재현상</b>
        </Typography>
        <Typography className={classes.typo}>
          이거 정말 원곡 아니야?라는 생각이 들었던 곡에 투표해주세요!
          <br />최소 1명부터 최대 3명까지 쓰실 수 있습니다.
        </Typography>
        <Typography className={classes.typo}>
          <b>※ 목소리나 특징적인 창법이 그 곡을 불렀던 원래 아이돌을 떠올리게 하는 경우를 말해요~!</b>
        </Typography>
        <Typography className={classes.typo}>
          <b>타부문과 중복투표 불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <EpisodeVotePolls count={5} defaultValue={defaultValue} onChange={onChange} />
      </CardContent>
    </Card>
  )
};

export default OriginalVoteCard;