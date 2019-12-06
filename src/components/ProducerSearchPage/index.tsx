import React, { FC, useState, useEffect } from "react";
import styles from "./styles";
import axios from 'axios';
import { SearchResultCard, ProducerSearchTab, ProducerSearchBar } from "..";
import { Divider } from "@material-ui/core";
import { EpisodeData } from "../../entities/episodeData";

interface ProducerSearchPageProps { }

const ProducerSearchPage: FC<ProducerSearchPageProps> = () => {
  const classes = styles();
  const [results, setResults] = useState<EpisodeData[]>([]);
  const [producers, setProducers] = useState<string[]>([]);

  const handleSearch = (producer: string, infos: EpisodeData[]) => {
    setResults(infos.map(value => ({ producer, ...value })));
  }

  useEffect(() => {
    axios
    .get('http://localhost:3000/api/producers')
    .then(({ data }) => {
      setProducers(data);
    });
  }, []);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className={classes.root}>
      <ProducerSearchBar onSearch={(producer, infos) => handleSearch(producer, infos)} producers={producers} />
      <Divider className={classes.divider} />
      {
        results.map((info) => (
          <SearchResultCard info={info} />
        ))
      }
    </div>
  );
};

export default ProducerSearchPage;