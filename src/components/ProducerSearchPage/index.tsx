import React, { FC, useState, useEffect } from "react";
import styles from "./styles";
import axios from 'axios';
import { SearchResultCard, ProducerSearchBar } from "..";
import { Divider, Typography, LinearProgress } from "@material-ui/core";
import { EpisodeData } from "../../entities/EpisodeData";

interface ProducerSearchPageProps { }

const ProducerSearchPage: FC<ProducerSearchPageProps> = () => {
  const classes = styles();
  const [results, setResults] = useState<EpisodeData[]>([]);
  const [producers, setProducers] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = (producer: string, infos: EpisodeData[]) => {
    setLoading(false);
    setResults(infos.map(value => ({ producer, ...value })));
  }
  
  const handleError = (message: string) => {
    setError(message);
    setLoading(false);
  };

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_ROOT_URL}/producers`)
    .then(({ data }) => {
      setProducers(data);
    });
  }, []);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className={classes.root}>
      <ProducerSearchBar 
        producers={producers}
        onSearch={(producer, infos) => handleSearch(producer, infos)}
        onStartSearch={() => setLoading(true)}
        onError={(message) => handleError(message)} />
      { isLoading ? <LinearProgress className={classes.divider} /> : <Divider className={classes.divider} /> }
      { error !== '' && 
        <Typography variant="subtitle1" color="secondary" style={{ margin: 10 }}>
          <b>{error}</b>
        </Typography>
      }
      {
        results.map((info) => (
          <SearchResultCard info={info} />
        ))
      }
    </div>
  );
};

export default ProducerSearchPage;