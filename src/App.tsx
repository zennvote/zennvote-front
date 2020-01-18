import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/modules';

import { SnackbarProvider } from 'notistack';

import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';

import { MainAppBar, VoteEnd } from './components';
import { MainDrawer, MainStepper } from './containers';


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
  const [isVoteEnded, setVoteEnded] = useState(true);

  return (
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={5000}>
        <ThemeProvider theme={theme}>
          { isVoteEnded ?
            <VoteEnd /> :
            <React.Fragment>
              <MainAppBar onClick={() => setDrawerStatus(true)} />
              <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
            </React.Fragment>
          }
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;