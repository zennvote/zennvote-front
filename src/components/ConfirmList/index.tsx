import React, { FC, useState } from "react";
import styles from "./styles";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import EmailCard from "./cards/EmailCard";
import FieldCard from "./cards/FieldCard";
import { VoteData } from "../../entities/VoteData";
import { RootState } from "../../store/modules";
import { useSelector } from "react-redux";

interface ConfirmListProps { }

const testVote: VoteData = {
  email: 'qjfnrtop12@naver.com',
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