import React, { FC, useState } from "react";
import styles from "./styles";
import { EpisodeSearchTab, SearchResultCard } from "..";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import { EpisodeData } from "../../entities/EpisodeData";

interface EpisodeSearchPageProps { }

const EpisodeSearchPage: FC<EpisodeSearchPageProps> = () => {
  const classes = styles();
  const [results, setResults] = useState<EpisodeData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = (info: EpisodeData) => {
    setError('');
    setResults([info, ...results]);
    setLoading(false);
  }

  const handleError = (message: string) => {
    setError(message);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <EpisodeSearchTab onStartSearch={() => setLoading(true)} onSearch={(info) => handleSearch(info)} onError={(message) => handleError(message)}/>
      { isLoading ? <LinearProgress className={classes.divider} /> : <Divider className={classes.divider} /> }
      { error !== '' && 
        <Typography variant="subtitle1" color="secondary" style={{ margin: 10 }}>
          <b>{error}</b>
        </Typography>
      }
      {
        results.slice(0, 4).map((info) => (
          <SearchResultCard info={info} />
        ))
      }
    </div>
  );
};

export default EpisodeSearchPage;