import React, { FC, useState } from 'react';

import { MainDrawer as MainDrawerComponent, DrawerTabs, EpisodeSearchPage } from '../../components';

interface MainDrawerInterface {
  drawerWidth: number;
  isOpend: boolean;
  onClose: () => void;
}

const tabs = [
  <EpisodeSearchPage />,
  <h1>This is find tab 2</h1>
];

const MainDrawer: FC<MainDrawerInterface> = ({ drawerWidth, isOpend, onClose }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <MainDrawerComponent isOpend={ isOpend } onClick={onClose} drawerWidth={ drawerWidth }>
      <DrawerTabs onChange={(n) => setCurrentTab(n)} />
      { tabs[currentTab] }
    </MainDrawerComponent>
  );
}

export default MainDrawer;