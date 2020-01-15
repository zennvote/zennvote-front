import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import { Select, MenuItem } from '@material-ui/core';
import { useSnackbar } from 'notistack';

interface SelectVotePollsProps {
  choices: ({ name: string, value: any } | string)[];
  count: number;
  onChange?: (selected: any[]) => void;
}

const SelectVotePolls: FC<SelectVotePollsProps> = ({ choices, count, onChange }) => {
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  const [selected, setSelected] = useState<any[]>(new Array(count).fill(''));

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
    <div className={classes.root}>
    {
        new Array(count).fill(0).map((_, index) => (
            <Select key={index} className={classes.select} value={selected[index]} onChange={(e) => handleOptionChange(index, e)}>
                <MenuItem key='none' value=''>선택 안함</MenuItem>
            {
                choices.map(x => {
                    if (typeof x === 'string')
                        return <MenuItem key={x} value={x}>{x}</MenuItem>
                    return <MenuItem key={x.value} value={x.value}>{x.name}</MenuItem>
                })
            }
            </Select>
        ))
    }
    </div>
  )
};

export default SelectVotePolls;