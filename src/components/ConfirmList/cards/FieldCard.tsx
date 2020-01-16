import React, { FC, useState, useEffect } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { VoteData } from "../../../entities/VoteData";
import { EpisodeData } from "../../../entities/EpisodeData";
import axios from 'axios';

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
  const [latestVote, setLatestVote] = useState<VoteData>();

  useEffect(() => {
    const { pitch, voice, funny, content, original } = vote;
    const promises = [pitch, voice, funny, content, original]
    .map(async (episodeDatas) => {
      if (!episodeDatas)
        return undefined;

      const episodePromises = episodeDatas.map(async ({ episode, index }) => ( await axios.get(`${process.env.REACT_APP_API_ROOT_URL}/episode`, {
        params: { episode, index },
      }) ).data as EpisodeData );
      return await Promise.all(episodePromises);
    });

    Promise.all(promises)
    .then(([pitch, voice, funny, content, original]) => {
      setLatestVote({ pitch, voice, funny, content, original });
    });
  }, []);

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>부문상</b>
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.episodeRoot}>
            <EpisodeItem classes={classes} episodeData={latestVote?.pitch} title='가창력이 뛰어난 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={latestVote?.voice} title='멋진 목소리의 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={latestVote?.funny} title='예능 프로듀서 상' />
            <EpisodeItem classes={classes} episodeData={latestVote?.content} title='노래 그 이상♬' />
            <EpisodeItem classes={classes} episodeData={latestVote?.original} title='원곡재현상' />
          </div>
        </CardContent>
    </Card>
  );
};

export default FieldCard;