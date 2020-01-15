import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider, Grid } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { VoteData } from "../../../entities/VoteData";
import { EpisodeData } from "../../../entities/EpisodeData";

interface FieldCardProps {
  vote: VoteData;
}

interface ItemProps {
  episodeData: EpisodeData[] | undefined;
  title: string;
  classes: any;
}

const EpisodeItem: FC<ItemProps> = ({ classes, title, episodeData }) => {
  return (
    <ExpansionPanel className={classes.episodePanel}>
      <ExpansionPanelSummary>
        <Typography className={classes.episodeTitle}>
            <b>{ title }</b>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.episodeRoot}>
        {
          episodeData &&
          episodeData.map(({ episode, index, song, producer, votable }, itemIndex) => (
            <div key={itemIndex} className={classes.episodeItemRoot}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {episode}회 {index}번 투고
              </Typography>
              <Typography variant="h5" component="h2">
                {song}
              </Typography>
              <Typography  color="textSecondary">
                {producer}
              </Typography>
              { !votable &&
              <Typography className={classes.pos} variant="body2" component="p" color="error">
                투표 불가능곡
              </Typography>
              }
            </div>
          ))
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const FieldCard: FC<FieldCardProps> = ({ vote }) => {
  const classes = styles();
  const { pitch, voice, funny, content, original } = vote;

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>부문상</b>
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.episodeRoot}>
            <EpisodeItem classes={classes} episodeData={pitch} title='가창력이 뛰어난 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={voice} title='멋진 목소리의 프로듀서 상' />
          </div>
        </CardContent>
    </Card>
  );
};

export default FieldCard;