import React, { useState } from 'react';

import { Typography } from "@material-ui/core";

import { MainAppBar, MainDrawer } from './components';

const drawerWidth = 600;

const App = () => {
  const [isDrawerOpend, setDrawerStatus] = useState(false);

  return (
    <div>
      <MainAppBar onClick={() => setDrawerStatus(true)} />
      <MainDrawer isOpend={isDrawerOpend} onClick={() => setDrawerStatus(false)} drawerWidth={drawerWidth}>
        <div>
          <h1>It will be a search component</h1>
        </div>
      </MainDrawer>
      <main>
        <Typography paragraph>
          This is Test Paragraph
        </Typography>
      </main>
    </div>
  );
};

export default App