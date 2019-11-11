import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_SIDE_DRAWER } from '../../../../redux/constants';
import './DrawerToggleButton.css';

const DrawerToggleButton = () => {
    const dispatch = useDispatch();
    return (
        <button className='toggle-button' onClick={() => dispatch({ type: OPEN_SIDE_DRAWER })}>
            <div className='toggle-button-line' />
            <div className='toggle-button-line' />
            <div className='toggle-button-line' />
        </button>
    );
};
export default DrawerToggleButton;
