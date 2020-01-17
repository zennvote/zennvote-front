import React, { FC } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";
import EpisodeItem from "../items/EpisodeItem";
import SelectionItem from "../items/SelectionItem";

interface MasterCardProps {
  vote: VoteData;
}

const MasterCard: FC<MasterCardProps> = ({ vote }) => {
  const classes = styles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent className={classes.cardContentsRoot}>
        <Typography variant="h5" component="h2" className={classes.cardTitle}>
          <b>대상</b>
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.episodeRoot}>
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Typography className={classes.episodeTitle}>
                <b>나의 명함을 주고싶은 프로듀서 상</b>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.episodeRoot}>
              {
                vote.master &&
                <Typography variant="h5" component="h2">
                  { vote.master.join(', ') }
                </Typography>
              }
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CardContent>
    </Card>
  );
};

export default MasterCard;