import React, { FC, useState } from "react";
import styles from "./styles";
import { EpisodeSearchTab, SearchResultCard } from "..";
import { Divider } from "@material-ui/core";
import { EpisodeData } from "../../entities/episodeData";

interface EpisodeSearchPageProps { }

const EpisodeSearchPage: FC<EpisodeSearchPageProps> = () => {
  const classes = styles();
  const [results, setResults] = useState<EpisodeData[]>([]);

  const handleSearch = (info: EpisodeData) => {
    setResults([info, ...results]);
  }

  return (
    <div className={classes.root}>
      <EpisodeSearchTab onSearch={(info) => handleSearch(info)}/>
      <Divider className={classes.divider} />
      {
        results.slice(0, 4).map((info) => (
          <SearchResultCard info={info} />
        ))
      }
    </div>
  );
};

export default EpisodeSearchPage;