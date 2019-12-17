import React, { FC, useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import styles from './styles';
import { EpisodeData } from '../../../entities/EpisodeData';
import Vote from '../Vote';

interface VoteElementProps {
  index?: number;
  episodeData?: EpisodeData;
  onChanged?: (index: number, vote: Vote) => void;
}

const VoteElement: FC<VoteElementProps> = ({ index, episodeData }) => {
  const classes = styles();
  const [vote, setVote] = useState<Vote>({})

  const handleEpisodeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
  };

  const handleIndexChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <TextField className={classes.textField} label="회차" onChange={ handleEpisodeChanged } />
      <Typography variant="h6">회</Typography>
      <TextField className={classes.textField} label="번호" onChange={ handleIndexChanged } />
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