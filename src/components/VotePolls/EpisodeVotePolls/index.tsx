import React, { FC, useState, useEffect } from 'react';
import VoteElement from './VoteElement';
import Vote from './Vote';
import { Button, CircularProgress } from '@material-ui/core';
import styles from './styles';
import axios from 'axios';
import { EpisodeData } from '../../../entities/EpisodeData';

interface EpisodeVotePollsProps {
  count: number;
}

const EpisodeVotePolls: FC<EpisodeVotePollsProps> = ({ count }) => {
  const classes = styles();
  const [votes, setVotes] = useState<Vote[]>(Array(count));
  const [episodes, setEpisodes] = useState<EpisodeData[]>(Array(count));
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleVoteChange = (index: number, vote: Vote | null) => {
    if (!vote)
      return;

    const newVotes = votes.slice();
    newVotes[index] = vote;
    setVotes(newVotes);
  };

  const handleConfirm = () => {
    setLoading(true);

    let newData = episodes.slice();
    const promises = votes.map((vote, index) => new Promise((resolve) => {
      if (!vote || !vote.episode || !vote.index)
        return null;

      return axios.get(`${process.env.REACT_APP_API_ROOT_URL}/episode`, {
        params: { episode: vote.episode, index: vote.index },
      })
      .then(({ data }) => resolve(data));
    }))
    .filter((promise) => promise !== null);

    Promise.all(promises)
    .then((values) => {
      setEpisodes(values.map(value => value as EpisodeData));
      setLoading(false);
    });
  };

  return (
    <div>
    {
      [...Array(count).keys()].map((index: number) => (
        <VoteElement key={index} index={index} onChanged={handleVoteChange} episodeData={episodes[index] ? episodes[index] : undefined} />
      ))
    }
      <div className={classes.buttonRoot}>
        <div className={classes.buttonWrapper}>
          <Button className={classes.button} variant="contained" color="primary" onClick={handleConfirm} disabled={isLoading}>
            회차 정보 조회
          </Button>
          { isLoading && <CircularProgress size={24} className={classes.progress} /> }
        </div>
      </div>
    </div>
  )
};

export default EpisodeVotePolls;