import React, { FC, useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { EpisodeData } from "../../../entities/EpisodeData";
import axios from 'axios';

interface ItemProps {
  selectionData: string[] | undefined;
  title: string;
  classes: any;
}

const SelectionItem: FC<ItemProps> = ({ classes, title, selectionData }) => {
  return (
    <ExpansionPanel className={classes.episodePanel}>
      <ExpansionPanelSummary>
        <Typography className={classes.episodeTitle}>
            <b>{ title }</b>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.episodeRoot}>
        {
          selectionData &&
          (
            selectionData.length > 0 ?
            selectionData.map(selection => (
              <Typography key={selection} className={classes.cardTypo}>{ selection }</Typography>
            ))
            : <Typography className={classes.cardTypo}>선택하지 않았습니다.</Typography>
          )
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default SelectionItem;