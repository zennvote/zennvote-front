import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider, CircularProgress } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import axios from 'axios';

interface PopVoteCardProps {
}

const PopVoteCard: FC<PopVoteCardProps> = () => {
  const classes = styles();
  const [selects, setSelects] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<string[] | undefined>(undefined);
  
  useEffect(() => {
    axios
    .get(`http://vote020.dev-shift.me/api/producers`)
    .then(({ data }) => setCandidates(data));
  }, [])

  useEffect(() => {
    console.log(selects);
  }, [selects]);

  const handlePollsChange = (arr: any[]) => {
    setSelects(arr);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          첫번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          그날, 나를 <b>잠 못 이루게 한 프로듀서 상</b>
        </Typography>
        <Typography className={classes.typo}>
          성별 불문, 실력 불문, 목소리 불문. 나를 즐겁거나 두근거리거나 설레거나 행복하게 만들어 주었던
          <br />프로듀서를 최소 1명~최대 3명까지 뽑아주세요. 앞 부문과 중복 가능.
        </Typography>
        <Divider className={classes.divider}/>
        <Typography className={classes.typo}>
          ※ 대상과 너무 겹치지 않는지 고민하고 투표해주세요.
          <br />여기엔 회차별 순간순간의 감동이나 웃음, <b>나의 팬심</b>을 좀 더 담고, 대상에는 각 회차의 시즌 대상을 탈 만한 활약을 보인 프로듀서님을 총체적으로 판단하여 투표바랍니다 : )
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.selectRoot}>
        <EpisodeVotePolls count={3} onChange={console.log} />
        </div>
      </CardContent>
    </Card>
  )
};

export default PopVoteCard;