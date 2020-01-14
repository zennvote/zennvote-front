import React, { useState } from 'react';

import { Container } from "@material-ui/core";

import { MainAppBar } from './components';
import { MainDrawer, MainStepper } from './containers';

import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/modules';

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainAppBar onClick={() => setDrawerStatus(true)} />
        <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
        <Container className={classes.main} maxWidth="md">
          <MainStepper />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;