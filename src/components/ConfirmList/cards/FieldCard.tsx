import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";
import EpisodeItem from "../items/EpisodeItem";

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
          <div className={classes.episodeRoot}>
            <EpisodeItem classes={classes} episodeData={vote?.pitch} title='가창력이 뛰어난 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={vote?.voice} title='멋진 목소리의 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={vote?.funny} title='예능 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={vote?.content} title='노래 그 이상♬' />
            <EpisodeItem classes={classes} episodeData={vote?.original} title='원곡재현상' />
          </div>
        </CardContent>
    </Card>
  );
};

export default FieldCard;