import {
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  FLOAT_NAVBAR,
  STICKY_NAVBAR
} from './constants';

const initialSideDrawerState = {
  sideDrawer: false,
  floatNavbar: false
};

export const toggleSideDrawer = (state = initialSideDrawerState, action) => {
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      return { ...state, sideDrawer: true };
    case CLOSE_SIDE_DRAWER:
      return { ...state, sideDrawer: false };
    default:
      return state;
  }
};

export const toggleFloatNavbar = (state = initialSideDrawerState, action) => {
  switch (action.type) {
    case FLOAT_NAVBAR:
      return { ...state, floatNavbar: true };
    case STICKY_NAVBAR:
      return { ...state, floatNavbar: false };
    default:
      return state;
  }
};
