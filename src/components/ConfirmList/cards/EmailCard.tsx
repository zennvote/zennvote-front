import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";

interface EmailCardProps {
  vote: VoteData;
}

const EmailCard: FC<EmailCardProps> = ({ vote: { email } }) => {
  const classes = styles();

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>이메일</b>
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.cardTypo}>
            { email }
          </Typography>
        </CardContent>
    </Card>
  );
};

export default EmailCard;