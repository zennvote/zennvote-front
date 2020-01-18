import React, { FC, useState, useEffect } from "react";
import styles from "../styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { VoteData } from "../../../entities/VoteData";
import EpisodeItem from "../items/EpisodeItem";
import { EpisodeData } from "../../../entities/EpisodeData";

interface FieldCardProps {
  vote: VoteData;
  onUpdate?: (result: VoteData) => void;
}

const FieldCard: FC<FieldCardProps> = ({ vote, onUpdate }) => {
  const classes = styles();
  const [latestPitch, setLatestPitch] = useState<EpisodeData[] | undefined>(undefined);
  const [latestVoice, setLatestVoice] = useState<EpisodeData[] | undefined>(undefined);
  const [latestFunny, setLatestFunny] = useState<EpisodeData[] | undefined>(undefined);
  const [latestContent, setLatestContent] = useState<EpisodeData[] | undefined>(undefined);
  const [latestOriginal, setLatestOriginal] = useState<EpisodeData[] | undefined>(undefined);


  useEffect(() => {
    if (!latestPitch || !latestVoice || !latestFunny || !latestContent || !latestOriginal)
      return;
    
    if (onUpdate) {
      onUpdate({
        pitch: latestPitch,
        voice: latestVoice,
        funny: latestFunny,
        content: latestContent,
        original: latestOriginal,
      });
    }
   
  }, [latestPitch, latestVoice, latestFunny, latestContent, latestOriginal]);

  return (
    <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentsRoot}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <b>부문상</b>
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.episodeRoot}>
            <EpisodeItem classes={classes} onUpdated={setLatestPitch} episodeData={vote?.pitch} title='가창력이 뛰어난 프로듀서 상' />
            <EpisodeItem classes={classes} onUpdated={setLatestVoice} episodeData={vote?.voice} title='멋진 목소리의 프로듀서 상' />
            <EpisodeItem classes={classes} onUpdated={setLatestFunny} episodeData={vote?.funny} title='예능 프로듀서 상' />
            <EpisodeItem classes={classes} onUpdated={setLatestContent} episodeData={vote?.content} title='노래 그 이상♬' />
            <EpisodeItem classes={classes} onUpdated={setLatestOriginal} episodeData={vote?.original} title='원곡재현상' />
          </div>
        </CardContent>
    </Card>
  );
};

export default FieldCard;