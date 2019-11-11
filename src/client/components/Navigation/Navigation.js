import React from 'react';
import { useSelector } from 'react-redux';
import Toolbar from './Menubar/Toolbar/Toolbar';
import SideDrawer from './Menubar/SideDrawer/SideDrawer';
import Backdrop from './Menubar/Backdrop/Backdrop';

const Menubar = () => {
  const sideDrawer = useSelector((state) => state.toggleSideDrawer.sideDrawer);

  return (
    <div>
      <Toolbar />
      <SideDrawer />
      {sideDrawer ? <Backdrop /> : undefined}
    </div>
  );
};

export default Menubar;
