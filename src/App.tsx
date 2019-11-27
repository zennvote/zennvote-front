import React, { useState } from 'react';

import { Typography } from "@material-ui/core";

import { MainAppBar } from './components';
import { MainDrawer } from './containers';

const drawerWidth = 600;

const App = () => {
  const [isDrawerOpend, setDrawerStatus] = useState(false);

  return (
    <div>
      <MainAppBar onClick={() => setDrawerStatus(true)} />
      <MainDrawer drawerWidth={ drawerWidth } isOpend={ isDrawerOpend } onClose={() => setDrawerStatus(false)}/>
      <main>
        <Typography paragraph>
          This is Test Paragraph
        </Typography>
      </main>
    </div>
  );
};

export default App