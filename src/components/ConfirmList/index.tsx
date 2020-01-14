import React, { FC, useState } from "react";
import styles from "./styles";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import EmailCard from "./cards/EmailCard";
import FieldCard from "./cards/FieldCard";
import { VoteData } from "../../entities/VoteData";

interface ConfirmListProps { }

const testVote: VoteData = {
  email: 'qjfnrtop12@naver.com',
};

const ConfirmList: FC<ConfirmListProps> = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
        <EmailCard vote={testVote} />
        <FieldCard vote={testVote} />
    </div>
  );
};

export default ConfirmList;