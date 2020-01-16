import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider, CircularProgress } from '@material-ui/core';
import styles from './styles';
import { SelectVotePolls } from '../..';
import axios from 'axios';

interface GrowVoteCardProps {
  defaultValue?: string[] | undefined;
  onChange: (value: string[]) => void;
}

const GrowVoteCard: FC<GrowVoteCardProps> = ({ defaultValue, onChange }) => {
  const classes = styles();
  const [candidates, setCandidates] = useState<string[] | undefined>(undefined);
  
  useEffect(() => {
    axios
    .get(`http://vote020.dev-shift.me/api/choices/grow`)
    .then(({ data }) => setCandidates(data));
  }, []);

  const handlePollsChange = (arr: any[]) => {
    onChange(arr);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          세번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          <b>성장하는</b> 프로듀서 상
        </Typography>
        <Typography className={classes.typo}>
          데뷔 때부터 지금까지 정말 많이 <b>실력적으로나 퀄리티로나
          <br />성장했다는 게 느껴지는 P</b>의 닉네임을 적어주세요.
        </Typography>
        <Divider className={classes.divider}/>
        <Typography className={classes.typo}>
          노래자랑을 본 지 얼마 안 된 분들도 계실 것이기 때문에 이 부문은 <b>스킵이 가능</b>합니다.
          <br />다만 3시즌 이상 봐 오셨던 분이라면, 내가 응원하는 그 프로듀서에게 투표해주세요!
        </Typography>
        <Divider className={classes.divider}/>
        <Typography className={classes.typo}>
          <b>5회 이상 투고했던 P에게만 투표가능, 명예P들 및 지난 시즌 성장상 수상자 레어레어는 투표불가</b>
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.selectRoot}>
        {
          candidates ?
          <SelectVotePolls choices={candidates} defaultValue={defaultValue} count={3} onChange={handlePollsChange} />
          : <CircularProgress className={classes.progress} />
        }
        </div>
      </CardContent>
    </Card>
  )
};

export default GrowVoteCard;