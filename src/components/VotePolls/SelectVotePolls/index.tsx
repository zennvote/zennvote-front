import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import { Select, MenuItem } from '@material-ui/core';

interface SelectVotePollsProps {
  choices: ({ name: string, value: any } | string)[];
  minimum?: number;
  count: number;
}

const SelectVotePolls: FC<SelectVotePollsProps> = ({ choices, minimum, count }) => {
  const classes = styles();
  const selected = useState<number[]>([]);

  return (
    <div className={classes.root}>
    {
        new Array(count).fill(0).map((_, index) => (
            <Select key={index} className={classes.select}>
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