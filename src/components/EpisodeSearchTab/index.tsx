import React, { FC, useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';
import styles from "./styles";
import { EpisodeData } from "../../entities/EpisodeData";

interface EpisodeSearchTabProps {
  onSearch: (info: EpisodeData) => void;
  onStartSearch: () => void;
  onError: (message: string) => void;
}

const EpisodeSearchTab: FC<EpisodeSearchTabProps> = ({ onSearch, onStartSearch, onError }) => {
  const classes = styles();

  const [episode, setEpisode] = useState(80);
  const [index, setIndex] = useState(11);

  const handleClick = async () => {
    onStartSearch();
    try {
      const { data } = await axios.get('http://localhost:3000/api/episode', {
        params: { episode, index },
      });

      onSearch(data as EpisodeData);
    } catch ({ response: { status }}) {
      switch(status) {
        case 404:
          onError('투고 정보를 찾을 수 없습니다. 다시 시도해주세요!');
          break;
        default:
          onError('알 수 없는 에러가 발생했습니다. 다시 시도해주세요!');
      }
    }
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