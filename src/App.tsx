import React, { useState } from 'react';

import { Container } from "@material-ui/core";

import { MainAppBar } from './components';
import { MainDrawer, MainStepper } from './containers';

import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: 80,
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
})

const drawerWidth = 550;

const App = () => {
  const classes = styles();
  const [isDrawerOpend, setDrawerStatus] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainAppBar onClick={() => setDrawerStatus(true)} />
        <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
        <Container className={classes.main} maxWidth="md">
          <MainStepper />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;