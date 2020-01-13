import React, { FC, useState, useEffect } from 'react';
import VoteElement from './VoteElement';
import Vote from './Vote';

interface EpisodeVotePollsProps {
  count: number;
}

const EpisodeVotePolls: FC<EpisodeVotePollsProps> = ({ count }) => {
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
    {
      [...Array(count).keys()].map((index: number) => <VoteElement key={index} index={count} onChanged={handleVoteChange} />)
    }
    </div>
  )
};

export default EpisodeVotePolls;