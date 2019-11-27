import React, { FC } from 'react';

import { MainDrawer as MainDrawerComponent } from '../../components';

interface MainDrawerInterface {
  drawerWidth: number;
  isOpend: boolean;
  onClose: () => void;
}

const MainDrawer: FC<MainDrawerInterface> = ({ drawerWidth, isOpend, onClose }) => {
  return (
    <MainDrawerComponent isOpend={ isOpend } onClick={onClose} drawerWidth={ drawerWidth }>
      <div>
        <h1>It will be a search component</h1>
      </div>
    </MainDrawerComponent>
  );
}

export default MainDrawer;