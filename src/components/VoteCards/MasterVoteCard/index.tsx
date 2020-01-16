import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider, CircularProgress } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls, SelectVotePolls } from '../..';
import axios from 'axios';
import Vote from '../../EpisodeVotePolls/Vote';

interface MasterVoteCardProps {
  defaultValue?: string[] | undefined;
  onChange: (values: string[]) => void;
}

const MasterVoteCard: FC<MasterVoteCardProps> = ({ defaultValue, onChange }) => {
  const classes = styles();
  const [candidates, setCandidates] = useState<string[] | undefined>(undefined);
  
  useEffect(() => {
    axios
    .get(`http://vote020.dev-shift.me/api/choices/master`)
    .then(({ data }) => setCandidates(data));
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className={classes.subtitle}>
          첫번째 부문
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          나의 <b>명함을 주고싶은</b> 그 프로듀서는?
        </Typography>
        <Typography className={classes.typo}>
          시즌 8을 빛내 준 프로듀서님을 뽑아주세요.
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h6" className={classes.listtitle}>
          <b>투표하면 안 되는 대상</b>
        </Typography>
        <ol>
          <li><Typography>시즌 7 안에서 투표 대상이 되는 곡을 2회 이상 투고했어야 함</Typography></li>
          <li><Typography>전체 시즌 통합하여 솔로를 2회 이상 투고했어야 함</Typography></li>
        </ol>
        <Divider className={classes.divider} />
        <Typography className={classes.typo}>
          아래는 이번 시즌 대상 후보자 61명이며 가나다순입니다.
        </Typography>
        <Typography className={classes.typo}>
          뽑으려는 P가 혹시 안 보인다면 영문과 한글닉 두개 다 확인해주세요.
        </Typography>
        <Typography className={classes.typo}>
          1~3명 투표 가능하며, 아래위 다른 선택지를 잘못 선택하지 않았는지 신중하게 체크해서 투표해주세요.
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.selectRoot}>
        {
          candidates ?
          <SelectVotePolls choices={candidates} defaultValue={defaultValue} count={3} onChange={onChange} />
          : <CircularProgress className={classes.progress} />
        }
        </div>
      </CardContent>
    </Card>
  )
};

export default MasterVoteCard;