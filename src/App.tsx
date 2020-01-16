import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/modules';

import { SnackbarProvider } from 'notistack';

import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal } from '@material-ui/core/colors';

import { MainAppBar } from './components';
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

  return (
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={5000}>
        <ThemeProvider theme={theme}>
          <MainAppBar onClick={() => setDrawerStatus(true)} />
          <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
          <Container className={classes.main} maxWidth="md">
            <h1 style={{ color: 'red' }}>버그 제보에 대해:</h1>
            현재까지 확인된 버그 리스트는 <a href='https://github.com/zennvote/zennvote-front/issues'><b>https://github.com/zennvote/zennvote-front/issues</b></a>에서 확인하실 수 있습니다.
            <br /> 해당 사이트에 없는 버그는 인스타 @kawaii_shift / 트위터 @cute_shift로 제보주세요!
            <br /> 확인하기 귀찮으시면 그냥 보내주셔도 OK!
            <br />
            <br /> 버그를 제보하기 전에 어떤 값을 넣었다~~ 등등을 기억해주시면 빠른 버그 수정에 도움이 됩니다!
            <br /> (ex. 5개 부문 투표에서 두번째 부문에 81회 9번이랑 82회 10번을 투표했는데 화면이 사라졌어요!)
            <br /> (ex. 인기상 첫번째 부문에 82회 11번을 투표했는데 비딩딩님 Closet Fashion Lover가 나와야 하는데 대두님 지구본에 없는 나라가 나오네요 ㅠㅠ)
            <MainStepper />
          </Container>
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;