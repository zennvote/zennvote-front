import React, { FC } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls, SelectVotePolls } from '../..';

interface RookieVoteCardProps {
}

const RookieVoteCard: FC<RookieVoteCardProps> = () => {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          두번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          나의 귀를 사로잡은 루키! <b>신인상!</b>
        </Typography>
        <Typography className={classes.typo}>
          이번 시즌에 처음 등장해서 내 머릿속에 꽂혀버린 매력적인 보이스의 소유자는 누구?
          <br />다음 시즌에 대활약해주길 기대하는 그 프로듀서에게 투표해주세요.
        </Typography>
        <Divider className={classes.divider}/>
        <Typography className={classes.typo}>
          ※ 진지하게 내게 <b>임팩트</b>를 줬고, 노래나 보이스가 너무 괜찮았기에 <b>앞으로를 기대하는 사람</b>에게 투표해주세요.
          나와 사전에 아는 사람이었다거나 하는 부차적인 이유가 고려되지 않았으면 합니다!
        </Typography>
        <Divider className={classes.divider}/>
        <SelectVotePolls choices={['test', 'test2', 'test3']} />
      </CardContent>
    </Card>
  )
};

export default RookieVoteCard;