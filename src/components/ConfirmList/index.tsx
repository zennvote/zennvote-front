import React, { FC, useState } from "react";
import styles from "./styles";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import EmailCard from "./cards/EmailCard";
import FieldCard from "./cards/FieldCard";
import { VoteData } from "../../entities/VoteData";
import { RootState } from "../../store/modules";
import { useSelector } from "react-redux";
import { EpisodeData } from "../../entities/EpisodeData";

interface ConfirmListProps { }

const testVote: VoteData = {
  email: 'qjfnrtop12@naver.com',
  pitch: [
    { episode: 80, index: 15, song: '이상한 나라의 과자가게 [번안]', producer: '라임슬라임', votable: true } as EpisodeData,
    { episode: 80, index: 11, song: 'White Vows', producer: '이브넴', votable: true } as EpisodeData,
    { episode: 80, index: 9, song: '둘러가는 선셋', producer: '태민', votable: false } as EpisodeData,
  ]
};

const ConfirmList: FC<ConfirmListProps> = () => {
  const classes = styles();
  const vote = useSelector((state: RootState) => state.vote);

  return (
    <div className={classes.root}>
        <EmailCard vote={{ ...testVote, ...vote }} />
        <FieldCard vote={{ ...testVote, ...vote }} />
    </div>
  );
};

export default ConfirmList;