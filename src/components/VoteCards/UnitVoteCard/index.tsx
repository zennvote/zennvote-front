import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider, CircularProgress } from '@material-ui/core';
import styles from './styles';
import { SelectVotePolls } from '../..';
import axios from 'axios';

interface UnitVoteCardProps {
}

const UnitVoteCard: FC<UnitVoteCardProps> = () => {
  const classes = styles();
  const [selects, setSelects] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<string[] | undefined>(undefined);
  

  useEffect(() => {
    axios
    .get(`http://vote020.dev-shift.me/api/choices/unit`)
    .then(({ data }) => setCandidates(data));
  }, []);

  const handlePollsChange = (arr: any[]) => {
    setSelects(arr);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          네번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          최고의 <b>유닛상</b>
        </Typography>
        <Typography className={classes.typo}>
          가장 환상적인 호흡을 보여준 <b>3개의 유닛</b>에게 투표해주세요!
          <br />실력이나 그런 것과 무관하게, 내가 이 조합이 정말 좋았다 싶었던 유닛이면 됩니다.
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.selectRoot}>
        {
          candidates ?
          <SelectVotePolls choices={candidates} count={3} onChange={handlePollsChange} sizes={[12, 12, 12]} />
          : <CircularProgress className={classes.progress} />
        }
        </div>
      </CardContent>
    </Card>
  )
};

export default UnitVoteCard;