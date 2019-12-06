import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import { Search as SearchIcon } from '@material-ui/icons';

import styles from './styles'
import { Paper, IconButton, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { EpisodeData } from '../../entities/episodeData';

interface ProducerSearchBarProps {
  producers: string[];
  onSearch: (producer: string, infos: EpisodeData[]) => void;
}

const ProducerSearchBar: FC<ProducerSearchBarProps> = ({ producers, onSearch }) => {
  const classes = styles();
  const [producer, setProducer] = useState('');

  const handleOnSearch = async () => {
    const { data: { episodes } } = await axios.get('http://localhost:3000/api/episode/producer', { params: { producer } });
    
    onSearch(producer, episodes);
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