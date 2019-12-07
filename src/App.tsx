import React, { useState } from 'react';

import { Container } from "@material-ui/core";

import { MainAppBar, MainStepper } from './components';
import { MainDrawer } from './containers';

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: 80,
    },
  })
);

const drawerWidth = 550;

const App = () => {
  const classes = styles();
  const [isDrawerOpend, setDrawerStatus] = useState(false);

  return (
    <div>
      <MainAppBar onClick={() => setDrawerStatus(true)} />
      <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
      <Container className={classes.main} maxWidth="md">
        <MainStepper />
      </Container>
    </div>
  );
};

export default App;