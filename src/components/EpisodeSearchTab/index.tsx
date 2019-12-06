import React, { FC, useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';
import styles from "./styles";
import { EpisodeData } from "../../entities/episodeData";

interface EpisodeSearchTabProps {
  onSearch: (info: EpisodeData) => void;
}

const EpisodeSearchTab: FC<EpisodeSearchTabProps> = ({ onSearch }) => {
  const classes = styles();

  const [episode, setEpisode] = useState(80);
  const [index, setIndex] = useState(11);

  const handleClick = async () => {
    const { data } = await axios.get('http://localhost:3000/api/episode', {
      params: { episode, index },
    });

    onSearch(data as EpisodeData);
  };

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <TextField className={classes.numberField} type="number" value={episode} onChange={(e) => setEpisode(parseInt(e.target.value))} label="회수" />
        <TextField className={classes.numberField} type="number" value={index} onChange={(e) => setIndex(parseInt(e.target.value))} label="번호" />
        <IconButton className={classes.searchButton} onClick={async () => await handleClick()}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default EpisodeSearchTab;