import React, { FC, useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';
import styles from "./styles";
import { EpisodeData } from "../../entities/episodeData";

interface EpisodeSearchTabProps {
}

const ProducerSearchTab: FC<EpisodeSearchTabProps> = () => {
  const classes = styles();


  

  return (
    <div className={classes.root}>
    </div>
  );
};

export default ProducerSearchTab;