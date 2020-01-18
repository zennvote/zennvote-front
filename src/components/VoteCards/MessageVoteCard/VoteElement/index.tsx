import React, { FC, useState, useEffect } from 'react';
import { Typography, TextField, Grid } from '@material-ui/core';
import styles from './styles';
import { EpisodeData } from '../../../../entities/EpisodeData';
import Vote from '../Vote';

interface VoteElementProps {
  value: Vote,
  onChanged: (vote: Vote) => void;
}

const VoteElement: FC<VoteElementProps> = ({ value, onChanged }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.voteRoot}>
        <TextField
          className={classes.textField}
          label="이름"
          value={value?.name ?? ''}
          onChange={(event) => onChanged({ ...value, name: (event.target as HTMLInputElement).value }) } />
        <Typography variant="h6">에게</Typography>
      </div>
      <div className={classes.voteRoot}>
        <TextField
          className={classes.nameTextField}
          label="하고싶은 말"
          multiline
          variant="outlined"
          rows="4"
          value={value?.content ?? ''}
          onChange={(event) => onChanged({ ...value, content: (event.target as HTMLInputElement).value }) } />
      </div>
    </div>
  )
};

export default VoteElement;