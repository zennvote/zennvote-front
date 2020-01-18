import React, { FC, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Divider } from '@material-ui/core';
import styles from './styles';
import Vote from './Vote';
import VoteElement from './VoteElement';

interface MessageVoteCardProps {
  defaultValue?: Vote[] | undefined;
  onChange: (values: Vote[]) => void;
}

const MessageVoteCard: FC<MessageVoteCardProps> = ({ defaultValue, onChange }) => {
  const classes = styles();
  const [values, setValues] = useState<Vote[]>(defaultValue?.concat({}) ?? [{}]);

  useEffect(() => {
    onChange(values);
  }, [values]);

  const handleValueChanged = (value: Vote, index: number) => {
    let temp = values.slice();
    temp[index] = value;

    const lastValue = temp[values.length-1];

    temp = temp.filter((value, index) => value?.name || value?.content || index === temp.length-1 );

    if (lastValue.content && lastValue.name)
      temp = temp.concat({});

    setValues(temp);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography variant="h5" component="h2" className={classes.title}>
          <b>프로듀서님께 하고싶은 말</b>
        </Typography>
        <Typography className={classes.typo}>
          노래자랑에 출연한 프로듀서님께 하고싶은 말이 있다면 적어주세요.
          <br />자기의 닉을 밝혀도 되고 익명도 됩니다.
        </Typography>
        <Typography className={classes.typo}>
          ※ 여러 명에게 쓸 시 메시지마다 누가 썼는지 반복해서 닉을 쓰지 않으면 익명처리됩니다.
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.selectRoot}>
        {
          values.map((value, index) => <VoteElement key={index} value={value} onChanged={(vote) => handleValueChanged(vote, index)} />)
        }
        </div>
      </CardContent>
    </Card>
  )
};

export default MessageVoteCard;