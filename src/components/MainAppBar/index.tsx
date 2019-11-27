import React, { FC } from 'react';

import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import styles from './styles'

interface MainAppBarProps {
  onClick: () => void;
}

const MainAppBar: FC<MainAppBarProps> = ({ onClick }) => {
  const classes = styles(600);

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          TITLE
        </Typography>
        <IconButton color="inherit" onClick={ onClick }>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;