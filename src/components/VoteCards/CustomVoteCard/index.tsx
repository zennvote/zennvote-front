import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider, CircularProgress } from '@material-ui/core';
import styles from './styles';
import { EpisodeVotePolls, SelectVotePolls } from '../..';
import axios from 'axios';
import Vote from './Vote';
import VoteElement from './VoteElement';

interface CustomVoteCardProps {
  defaultValue?: Vote[] | undefined;
  onChange: (values: Vote[]) => void;
}

const CustomVoteCard: FC<CustomVoteCardProps> = ({ defaultValue, onChange }) => {
  const classes = styles();
  const [values, setValues] = useState<Vote[]>(defaultValue?.concat({}) ?? [{}]);

  useEffect(() => {
    onChange(values);
  }, [values]);

  const handleValueChanged = (value: Vote, index: number) => {
    let temp = values.slice();
    temp[index] = value;

    const lastValue = temp[values.length-1];

    temp = temp.filter((value, index) => value?.episode?.index || value?.episode?.index || value.name || index === temp.length-1 );

    if (lastValue.episode?.episode && lastValue.episode?.index && lastValue.name)
      temp = temp.concat({});

    setValues(temp);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography variant="h5" component="h2" className={classes.title}>
          <b>내가 주고싶은 상</b>
        </Typography>
        <Typography className={classes.typo}>
          직접 수상하고 싶은 상 부문과 수상자가 있다면 적어주세요.
          <br /> 재미있는 아이디어가 있다면 소개하겠습니다.
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.selectRoot}>
        {
          values.map((value, index) => <VoteElement value={value} onChanged={(vote) => handleValueChanged(vote, index)} />)
        }
        </div>
      </CardContent>
    </Card>
  )
};

export default CustomVoteCard;