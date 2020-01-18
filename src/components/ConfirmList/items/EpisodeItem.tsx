import React, { FC, useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { EpisodeData } from "../../../entities/EpisodeData";
import axios from 'axios';

interface ItemProps {
  episodeData: EpisodeData[] | undefined;
  title: string;
  classes: any;
  onUpdated?: (result: EpisodeData[] | undefined) => void;
}

const EpisodeItem: FC<ItemProps> = ({ classes, title, episodeData, onUpdated }) => {
  const [latestData, setLatestData] = useState<EpisodeData[] | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!episodeData) {
      setLoading(false);
      if (onUpdated)
        onUpdated(undefined);
      return;
    }

    Promise.all(
      episodeData.map(async ({ episode, index }) => {
        const res = await axios.get(`${process.env.REACT_APP_API_ROOT_URL}/episode`, {
          params: { episode, index }
        });
        return res.data as EpisodeData;
      })
    ).then((result) => {
      setLatestData(result);
      if (onUpdated)
        onUpdated(result);
    });
   
  }, []);

  return (
    <ExpansionPanel className={classes.episodePanel}>
      <ExpansionPanelSummary>
        <Typography className={classes.episodeTitle}>
            <b>{ title }</b>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.episodeRoot}>
        {
          latestData ?
          latestData.map(({ episode, index, song, producer, votable }, itemIndex) => (
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
          )) :
          (isLoading && <CircularProgress />)
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default EpisodeItem;