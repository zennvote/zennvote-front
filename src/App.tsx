import React from 'react';
import clrx from 'clsx';

import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const style = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

const App = () => {
  const classes = style();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            전국 프로듀서 노래자랑 시청자 투표 페이지
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App