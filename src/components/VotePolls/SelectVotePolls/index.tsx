import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import { Select, MenuItem, Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';

type Size = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

interface SelectVotePollsProps {
  choices: ({ name: string, value: any } | string)[];
  defaultValue?: string[] | undefined;
  count: number;
  onChange?: (selected: any[]) => void;
  sizes?: Size[];
}

const getDefaultSelection = (count: number, defaultValue: string[] | undefined) => {
  if (!defaultValue)
    return Array(count).fill('');

  const length = defaultValue.length;
  return Array(count).fill('').map((x, index) => length > index ? defaultValue[index] : x);
}

const SelectVotePolls: FC<SelectVotePollsProps> = ({ choices, defaultValue, count, onChange, sizes }) => {
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  const [selected, setSelected] = useState<any[]>(getDefaultSelection(count, defaultValue));

  useEffect(() => {
    if (onChange) onChange(selected.filter(x => x !== ''));
  }, [selected])

  const handleOptionChange = (index: number, event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    if (value !== '' && selected.indexOf(value) > -1 && selected.indexOf(value) !== index) {
      enqueueSnackbar('중복 선택은 불가능합니다.', { variant: 'error' });
      return;
    }

    let newSelected = [...selected];
    newSelected[index] = event.target.value as string;
    setSelected(newSelected);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
    {
        new Array(count).fill(0).map((_, index) => (
            <Grid item className={classes.selectGrid} xs={sizes ? sizes[0] : 12} sm={sizes ? sizes[1] : 4} md={sizes ? sizes[2] : 4}>
              <Select key={index} value={selected[index]} className={classes.select} onChange={(e) => handleOptionChange(index, e)}>
                  <MenuItem key='none' value=''>선택 안함</MenuItem>
              {
                  choices.map(x => {
                      if (typeof x === 'string')
                          return <MenuItem key={x} value={x}>{x}</MenuItem>
                      return <MenuItem key={x.value} value={x.value}>{x.name}</MenuItem>
                  })
              }
              </Select>
            </Grid>
        ))
    }
    </Grid>
  )
};

export default SelectVotePolls;