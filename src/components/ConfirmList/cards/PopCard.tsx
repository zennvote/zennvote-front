import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";
import EpisodeItem from "../items/EpisodeItem";
import SelectionItem from "../items/SelectionItem";

interface PopCardProps {
  vote: VoteData;
}

const PopCard: FC<PopCardProps> = ({ vote }) => {
  const classes = styles();

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>인기상</b>
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.episodeRoot}>
            <EpisodeItem classes={classes} episodeData={vote?.sleep} title='나를 잠 못 이루게 한 프로듀서 상' />
            <SelectionItem classes={classes} selectionData={vote?.new} title='신인상' />
            <SelectionItem classes={classes} selectionData={vote?.grow} title='성장하는 프로듀서 상' />
            <SelectionItem classes={classes} selectionData={vote?.unit} title='최고의 유닛상' />
          </div>
        </CardContent>
    </Card>
  );
};

export default PopCard;