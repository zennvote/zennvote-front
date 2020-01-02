import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import { Select, MenuItem } from '@material-ui/core';

interface SelectVotePollsProps {
  choices: ({ name: string, value: any } | string)[];
}

const SelectVotePolls: FC<SelectVotePollsProps> = ({ choices }) => {
  const classes = styles();
  return (
    <div className={classes.root}>
        <Select className={classes.select}>
        {
            choices.map(x => {
                if (typeof x === 'string')
                    return <MenuItem value={x}>{x}</MenuItem>
                return <MenuItem value={x.value}>{x.name}</MenuItem>
            })
        }
        </Select>
        <Select className={classes.select}>
        {
            choices.map(x => {
                if (typeof x === 'string')
                    return <MenuItem value={x}>{x}</MenuItem>
                return <MenuItem value={x.value}>{x.name}</MenuItem>
            })
        }
        </Select>
        <Select className={classes.select}>
        {
            choices.map(x => {
                if (typeof x === 'string')
                    return <MenuItem value={x}>{x}</MenuItem>
                return <MenuItem value={x.value}>{x.name}</MenuItem>
            })
        }
        </Select>
    </div>
  )
};

export default SelectVotePolls;