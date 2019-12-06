import React, { FC } from 'react';

import { IconButton, Divider, Drawer } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import styles from './styles'

interface MainDrawerProps {
  drawerWidth: number;
  isOpend: boolean;
  onClick: () => void;
}

const MainDrawer: FC<MainDrawerProps> = ({ children, drawerWidth, isOpend, onClick }) => {
  const classes = styles(drawerWidth);
  
  return (
    <Drawer className={classes.drawer} variant="persistent" anchor="right" open={isOpend} classes={{ paper: classes.drawerPaper}}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={ onClick }>
          <ChevronLeftIcon/>
        </IconButton>
      </div>
      <Divider />
      { children }
    </Drawer>
  )
};

export default MainDrawer;