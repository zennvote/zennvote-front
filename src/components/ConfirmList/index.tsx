import React, { FC, useState } from "react";
import styles from "./styles";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import EmailCard from "./cards/EmailCard";
import FieldCard from "./cards/FieldCard";
import { VoteData } from "../../entities/VoteData";
import { RootState } from "../../store/modules";
import { useSelector } from "react-redux";
import { EpisodeData } from "../../entities/EpisodeData";
import PopCard from "./cards/PopCard";

interface ConfirmListProps { }

const ConfirmList: FC<ConfirmListProps> = () => {
  const classes = styles();
  const vote = useSelector((state: RootState) => state.vote);

  return (
    <div className={classes.root}>
        <EmailCard vote={ vote } />
        <FieldCard vote={ vote } />
        <PopCard vote={ vote } />
    </div>
  );
};

export default ConfirmList;