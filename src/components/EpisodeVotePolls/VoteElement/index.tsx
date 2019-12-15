import React, { FC } from 'react';
import { Typography, TextField } from '@material-ui/core';
import styles from './styles';
import { EpisodeData } from '../../../entities/EpisodeData';

interface VoteElementProps {
  episodeData?: EpisodeData;
}

const VoteElement: FC<VoteElementProps> = ({ episodeData }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <TextField className={classes.textField} label="회차" />
      <Typography variant="h6">회</Typography>
      <TextField className={classes.textField} label="번호" />
      <Typography variant="h6">번</Typography>
      { episodeData &&
        <Typography color="textSecondary" className={classes.textFieldDesc}>
          <b>{`${episodeData.episode}회 ${episodeData.index}번`}</b> { episodeData.song }
          <br />by { episodeData.producer }
        </Typography>
      }
    </div>
  )
};

export default VoteElement;