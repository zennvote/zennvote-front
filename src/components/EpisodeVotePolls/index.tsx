import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import VoteElement from './VoteElement';
import { EpisodeData } from '../../entities/EpisodeData';
import Vote from './Vote';

interface EpisodeVotePollsProps {
}

const EpisodeVotePolls: FC<EpisodeVotePollsProps> = () => {
  const classes = styles();
  const [votes, setVotes] = useState<Vote[]>([]);

  const handleVoteChange = (index: number, vote: Vote) => {
    const newVotes = votes.slice();
    newVotes[index] = vote;
    setVotes(newVotes);
  };

  useEffect(() => {
    console.log(votes);
  }, [votes]);

  return (
    <div>
      <VoteElement onChanged={handleVoteChange} />
      <VoteElement onChanged={handleVoteChange} />
      <VoteElement onChanged={handleVoteChange} />
      <VoteElement onChanged={handleVoteChange} />
      <VoteElement onChanged={handleVoteChange} />
    </div>
  )
};

export default EpisodeVotePolls;