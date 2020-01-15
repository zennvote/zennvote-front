import React, { FC, useState, useEffect } from 'react';
import VoteElement from './VoteElement';
import Vote from './Vote';
import { Button, CircularProgress } from '@material-ui/core';
import styles from './styles';
import axios from 'axios';
import { EpisodeData } from '../../../entities/EpisodeData';
import { useSnackbar } from 'notistack';

interface EpisodeVotePollsProps {
  count: number;
  onChange: (values: Vote[]) => void;
}

const EpisodeVotePolls: FC<EpisodeVotePollsProps> = ({ count, onChange }) => {
  const classes = styles();

  const { enqueueSnackbar } = useSnackbar();

  const [votes, setVotes] = useState<Vote[]>(Array(count).fill(undefined));
  const [episodes, setEpisodes] = useState<EpisodeData[]>(Array(count).fill(undefined));
  const [isLoading, setLoading] = useState<boolean>(false);
  const [episodeErrors, setEpisodeErrors] = useState<string[]>(Array(count).fill(''));

  const handleVoteChange = (index: number, vote: Vote | null) => {
    if (!vote)
      return;

    const newVotes = votes.slice();
    newVotes[index] = vote;
    setVotes(newVotes);
  };

  const handleConfirm = () => {
    setLoading(true);

    setEpisodeErrors(episodeErrors.fill(''));
    let temp = episodeErrors.slice();
    const promises = votes.map((vote, index) => new Promise<EpisodeData>((resolve) => {
      if (!vote || !vote.episode || !vote.index)
        return resolve(undefined);

      return axios.get(`${process.env.REACT_APP_API_ROOT_URL}/episode`, {
        params: { episode: vote.episode, index: vote.index },
      })
      .then(({ data }) => resolve(data as EpisodeData))
      .catch(({ response }) => {
        if (!response || !response.status) {
          temp[index] = '알 수 없는 오류가 발생했습니다. 다시 한번 시도해주세요.';
        }
        else {
          switch (response.status) {
            case 400:
              temp[index] = '올바른 투고 정보를 입력해주세요.';
              break;
            case 404:
              temp[index] = '투고 정보가 존재하지 않습니다. 정확한 회차 및 번호를 입력해주세요.';
              break;
            default:
              temp[index] = '알 수 없는 오류가 발생했습니다. 다시 한번 시도해주세요.';
          }
        }
        resolve(undefined);
      });
    }))
    .filter((promise) => promise !== null);

    Promise.all(promises)
    .then((values) => {
      setLoading(false);
      const result = votes.filter((vote, index) => vote && vote.episode && vote.index && !temp[index])
      if (result.length === 0) {
        enqueueSnackbar("최소 1명 이상 투표해야 햡니다.", { variant: 'error' });
        return;
      }
      onChange(result);
      setEpisodes(values);
      setEpisodeErrors(temp);
      enqueueSnackbar("투표 결과가 적용되었습니다.", { variant: 'success' });
    })
    .catch(() => setLoading(false));
  };

  return (
    <div className={classes.root}>
    {
      [...Array(count).keys()].map((index: number) => (
        <VoteElement key={index} index={index} onChanged={handleVoteChange} episodeData={episodes[index] ? episodes[index] : undefined} episodeError={episodeErrors[index]} />
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