import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import { Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio, Paper } from '@material-ui/core';

import styles from './styles';
import { QuizData } from '../../entities/QuizData';

interface QuizContainerProps {
  defaultValue: number[] | undefined;
  onChange: (values: number[]) => void;
}

const QuizContainer: FC<QuizContainerProps> = ({ defaultValue, onChange }) => {
  const classes = styles();
  const [values, setValues] = useState<number[]>(defaultValue ?? []);
  const [quizzes, setQuizes] = useState<QuizData[]>([]);

  useEffect(() => {
    if (values.length === 0)
      return;
    onChange(values);
   
  }, [values])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ROOT_URL}/quiz`)
    .then(({ data }) => {
      if (values.length === 0)
        setValues(Array(data.length).fill(-1));
      setQuizes(data)
    });
   
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target as HTMLInputElement;
    let next = values.slice();
    next[index] = parseInt(value);
    setValues(next);
  };

  return (
    <div>
      <Divider className={classes.divider} />
      {
        quizzes.map(({ title, choices }, index) =>
        (
          <Paper key={index} className={classes.quizPaper}>
            <FormControl component="fieldset" className={classes.formControl}>
              <Typography className={classes.quizTitle} variant="h6">{index+1}. {title}</Typography>
              <RadioGroup aria-label="gender" name="gender1" defaultValue={-1} key={values[index]} value={values[index]} onChange={(e) => handleChange(e, index)}>
                {
                  choices.map((select, index) => (
                    <FormControlLabel value={index} key={index} control={<Radio color="primary" />} label={select} />
                  ))
                }
              </RadioGroup>
            </FormControl>
          </Paper>
        ))
      }
    </div>
  );
};

export default QuizContainer;