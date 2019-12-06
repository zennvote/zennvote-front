import React, { FC } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";

import styles from "./styles";
import { EpisodeData } from "../../entities/episodeData";

interface SearchResultCardProps {
  info: EpisodeData;
}

const SearchResultCard: FC<SearchResultCardProps> = ({info: { episode, index, song, producer, votable }}) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {episode}회 {index}번 투고
        </Typography>
        <Typography variant="h5" component="h2">
          {song}
        </Typography>
        <Typography  color="textSecondary">
          {producer}
        </Typography>
        { votable !== undefined &&
        <Typography className={classes.pos} variant="body2" component="p" color="primary">
          {votable ? '투표 가능곡' : '투표 불가능곡'}
        </Typography>
        }
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;