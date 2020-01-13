import React, { FC, useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import styles from './styles';
import { EpisodeData } from '../../../../entities/EpisodeData';
import Vote from '../Vote';

interface VoteElementProps {
  index: number;
  episodeData?: EpisodeData;
  onChanged?: (index: number, vote: Vote) => void;
}

enum VoteInputError {
  PASS,
}

const ValidateVote = (rawEpisode: string, rawIndex: string) : VoteInputError => {
  return VoteInputError.PASS;
};

const VoteElement: FC<VoteElementProps> = ({ index, episodeData }) => {
  const classes = styles();
  const [vote, setVote] = useState<Vote | null>(null);
  const [error, setError] = useState<VoteInputError>(VoteInputError.PASS);

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
      <div className={classes.voteRoot}>
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
      { error !== VoteInputError.PASS &&
      <div className={classes.captionRoot} >
        <Typography variant="caption" color="error">
          테스트용 Error Text Typography입니다.
        </Typography>
      </div>
      }
    </div>
  )
};

export default VoteElement;