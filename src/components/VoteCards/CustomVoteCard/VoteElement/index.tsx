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

  const handleEpisodeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: target } = event.target as HTMLInputElement;
    onChanged({ ...value, episode: { episode: parseInt(target), index: value?.episode?.index } });
  };

  const handleIndexChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: target } = event.target as HTMLInputElement;
    onChanged({ ...value, episode: { index: parseInt(target), episode: value?.episode?.episode } });
  };

  return (
    <div className={classes.root}>
      <div className={classes.voteRoot}>
        <TextField className={classes.textField} type="number" label="회차" value={value?.episode?.episode ?? ''} onChange={ handleEpisodeChanged } />
        <Typography variant="h6">회</Typography>
        <TextField className={classes.textField} type="number" label="번호" value={value?.episode?.index ?? ''} onChange={ handleIndexChanged } />
        <Typography variant="h6">번</Typography>
      </div>
      <div className={classes.voteRoot}>
        <TextField
          className={classes.nameTextField}
          label="상 이름"
          value={value?.name ?? ''}
          onChange={(event) => onChanged({ ...value, name: (event.target as HTMLInputElement).value }) } />
      </div>
    </div>
  )
};

export default VoteElement;