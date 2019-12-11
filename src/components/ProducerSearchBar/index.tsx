import React, { FC, useState } from 'react';
import axios from 'axios';

import { Search as SearchIcon } from '@material-ui/icons';

import styles from './styles'
import { IconButton, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { EpisodeData } from '../../entities/EpisodeData';

interface ProducerSearchBarProps {
  producers: string[];
  onSearch: (producer: string, infos: EpisodeData[]) => void;
  onStartSearch: () => void;
  onError: (message: string) => void;
}

const ProducerSearchBar: FC<ProducerSearchBarProps> = ({ producers, onSearch, onStartSearch, onError }) => {
  const classes = styles();
  const [producer, setProducer] = useState('');

  const handleOnSearch = async () => {
    onStartSearch();
    try {
      const { data: { episodes } } = await axios.get('http://localhost:3000/api/episode/producer', {
        params: { producer }
      });

      onSearch(producer, episodes);
    } catch ({ response: { status }}) {
      switch(status) {
        default:
          onError('알 수 없는 에러가 발생했습니다. 다시 시도해주세요!');
      }
    }
  };
  
  return (
    <div className={classes.root}>
      <Autocomplete
        className={ classes.input }
        options={ producers }
        getOptionLabel={(option: string) => option}
        onChange={(e: any) => setProducer(e.currentTarget.innerHTML)}
        renderInput={(params: any) => (
          <TextField {...params} label="프로듀서 이름" fullWidth />
        )}
      />
      <IconButton className={classes.iconButton} onClick={() => handleOnSearch()}>
        <SearchIcon />
      </IconButton>
    </div>
  )
};

export default ProducerSearchBar;