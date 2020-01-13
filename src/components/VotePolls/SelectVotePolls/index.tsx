import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import { Select, MenuItem } from '@material-ui/core';
import ErrorSnackbar from './components/ErrorSnackbar';

interface SelectVotePollsProps {
  choices: ({ name: string, value: any } | string)[];
  count: number;
  onChange?: (selected: any[]) => void;
}

const SelectVotePolls: FC<SelectVotePollsProps> = ({ choices, count, onChange }) => {
  const classes = styles();
  const [isDuplicated, setDuplicated] = useState<boolean>(false);
  const [selected, setSelected] = useState<any[]>(new Array(count).fill(''));

  useEffect(() => {
    console.log(selected);
    if (onChange) onChange(selected.filter(x => x !== ''));
  }, [selected])

  const handleOptionChange = (index: number, event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    if (value !== '' && selected.indexOf(value) > -1 && selected.indexOf(value) !== index) {
      setDuplicated(true);
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
      <ErrorSnackbar open={isDuplicated} onClose={() => setDuplicated(false)} />
    </div>
  )
};

export default SelectVotePolls;