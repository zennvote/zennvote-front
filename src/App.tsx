import React, { useState } from 'react';

import { Typography } from "@material-ui/core";

import { MainAppBar } from './components';
import { MainDrawer } from './containers';

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: 70,
    },
  })
);

const drawerWidth = 550;

const App = () => {
  const classes = styles();
  const [isDrawerOpend, setDrawerStatus] = useState(true);

  return (
    <div>
      <MainAppBar onClick={() => setDrawerStatus(true)} />
      <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
      <main className={classes.main}>
        <h1>씻고옴 ㅎㅎ</h1>
        <h1>씻는다며</h1>
      </main>
    </div>
  );
};

export default App;