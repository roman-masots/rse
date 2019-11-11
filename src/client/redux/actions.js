import {
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  FLOAT_NAVBAR,
  STICKY_NAVBAR
} from './constants';

export const showSideDrawer = () => ({
  type: OPEN_SIDE_DRAWER,
});

export const hideSideDrawer = () => ({
  type: CLOSE_SIDE_DRAWER
});

export const showFloatNavbar = () => ({
  type: FLOAT_NAVBAR,
});

export const showStickyNavbar = () => ({
  type: STICKY_NAVBAR
});
