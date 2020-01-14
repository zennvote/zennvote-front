import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";

interface FieldCardProps {
  vote: VoteData;
}

const FieldCard: FC<FieldCardProps> = ({ vote }) => {
  const classes = styles();

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>부문상</b>
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.cardTypo}>
          </Typography>
        </CardContent>
    </Card>
  );
};

export default FieldCard;