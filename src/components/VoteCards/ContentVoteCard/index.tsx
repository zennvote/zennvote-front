import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import Vote from '../../VotePolls/EpisodeVotePolls/Vote';

interface ContentVoteCardProps {
  onChange: (values: Vote[]) => void;
}

const ContentVoteCard: FC<ContentVoteCardProps> = ({ onChange }) => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          네번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          매력을 가득 담은 작품을 준비한 P에게 드리는! <b>노래 그 이상♬</b>
        </Typography>
        <Typography className={classes.typo}>
          노래 하나를 넘어선 다양한 볼거리, 즐길거리를 준비해서 
          <br />더 흥미롭게 감상할 수 있게 해 주었던 프로듀서님께 투표해주세요!
          <br />최소 1명부터 최대 3명까지 쓰실 수 있습니다.
        </Typography>
        <Typography className={classes.typo}>
          <b>영상/번안/악기연주/편곡 등...</b> 단, 보컬이 직접 만든 결과물이어야 합니다!
        </Typography>
        <Typography className={classes.typo}>
          <b>타부문과 중복투표 불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <EpisodeVotePolls count={3} onChange={onChange} />
      </CardContent>
    </Card>
  )
};

export default ContentVoteCard;