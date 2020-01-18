import React, { FC, useState } from 'react';
import { Typography, Card, CardContent, Divider, TextField } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls } from '../..';
import Vote from '../../VotePolls/EpisodeVotePolls/Vote';

interface SuggestionVoteCardProps {
  value: string;
  onChanged: (values: string) => void;
}

const SuggestionVoteCard: FC<SuggestionVoteCardProps> = ({ value, onChanged }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography variant="h5" component="h2" className={classes.title}>
          <b>건의사항</b>
        </Typography>
        <Typography className={classes.typo}>
          노래자랑에 대한 의견과 건의사항이 있다면 적어주세요. 모두 익명으로 접수됩니다~!
        </Typography>
        <Divider className={classes.divider} />
        <TextField
          label="건의사항"
          className={classes.input}
          multiline
          variant="outlined"
          rows="4"
          value={value}
          onChange={(event) => onChanged((event.target as HTMLInputElement).value)} />
        <Divider className={classes.divider}/>
      </CardContent>
    </Card>
  )
};

export default SuggestionVoteCard;