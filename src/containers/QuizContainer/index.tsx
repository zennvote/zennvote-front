import React, { FC, useState, useMemo } from 'react';

import { Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio, Paper } from '@material-ui/core';

import styles from './styles';
import { QuizData } from '../../entities/QuizData';

interface QuizContainerProps { }

const QuizContainer: FC<QuizContainerProps> = () => {
  const classes = styles();
  const [values, setValues] = useState<number[]>([0, 3]);

  const quizzes = useMemo<QuizData[]>(() => [], []);

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
        quizzes.map(({ title, selects }, index) =>
        (
          <Paper className={classes.quizPaper}>
            <FormControl component="fieldset" className={classes.formControl}>
              <Typography className={classes.quizTitle} variant="h6">{index+1}. {title}</Typography>
              <RadioGroup aria-label="gender" name="gender1" value={values[index]} onChange={(e) => handleChange(e, index)}>
                {
                  selects.map((select, index) => (
                    <FormControlLabel value={index} control={<Radio color="primary" />} label={select} />
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