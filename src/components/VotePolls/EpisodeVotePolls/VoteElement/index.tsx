import React, { FC, useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import styles from './styles';
import { EpisodeData } from '../../../../entities/EpisodeData';
import Vote from '../Vote';

interface VoteElementProps {
  index: number;
  episodeData?: EpisodeData;
  onChanged?: (index: number, vote: Vote | null) => void;
  episodeError?: string;
}

enum VoteInputError {
  PASS,
}

const ValidateVote = (rawEpisode: string, rawIndex: string) : VoteInputError => {
  return VoteInputError.PASS;
};

const VoteElement: FC<VoteElementProps> = ({ index, episodeData, onChanged, episodeError }) => {
  const classes = styles();
  const [vote, setVote] = useState<Vote | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!(episodeData?.votable ?? true)) {
      setError('투표 불가능한 곡입니다. 다시 확인해주세요.');
    }
    else if (episodeData?.episode && episodeData.episode < 81) {
      setError('지난 시즌의 곡입니다. 다시 확인해주세요.');
    }
    else {
      setError('');
    }
  }, [episodeData]);

  useEffect(() => {
    if (onChanged)
      onChanged(index, vote);
  }, [vote]);

  const handleEpisodeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setVote({ ...vote, episode: parseInt(value) });
  };

  const handleIndexChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setVote({ ...vote, index: parseInt(value) });
  };

  return (
    <div className={classes.root}>
      <div className={classes.voteRoot}>
        <TextField className={classes.textField} type="number" label="회차" onChange={ handleEpisodeChanged } />
        <Typography variant="h6">회</Typography>
        <TextField className={classes.textField} type="number" label="번호" onChange={ handleIndexChanged } />
        <Typography variant="h6">번</Typography>
        {
          episodeError ?
          <Typography color="error" className={classes.textFieldDesc}>
            <b>{ episodeError }</b>
          </Typography> :
          (
            episodeData &&
            <Typography color="textSecondary" className={classes.textFieldDesc}>
              <b>{`${episodeData.episode}회 ${episodeData.index}번`}</b> { episodeData.song }
              <br />by { episodeData.producer }
            </Typography>
          )
        }
      </div>
      { error &&
      <div className={classes.captionRoot} >
        <Typography variant="caption" color="error">
          { error }
        </Typography>
      </div>
      }
    </div>
  )
};

export default VoteElement;