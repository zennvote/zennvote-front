import React, { FC } from 'react';
import styles from './styles';
import VoteElement from './VoteElement';
import { EpisodeData } from '../../entities/EpisodeData';

interface EpisodeVotePollsProps {
}

const EpisodeVotePolls: FC<EpisodeVotePollsProps> = () => {
  const classes = styles();

  const samples: EpisodeData[] = [
    {
      episode: 82,
      index: 3,
      song: '첫사랑 ~4장 운명의 이브~',
      producer: '프롬',
    },
    {
      episode: 83,
      index: 14,
      song: '♡Cupids!',
      producer: '흰수염',
    },
    {
      episode: 84,
      index: 4,
      song: '너의 곁에서 계속 [영상]',
      producer: 'M+(마스터 플러스)(MA가렛+플루)',
    },
  ]
  return (
    <div>
      <VoteElement episodeData={samples[0]}/>
      <VoteElement episodeData={samples[1]}/>
      <VoteElement episodeData={samples[2]}/>
    </div>
  )
};

export default EpisodeVotePolls;