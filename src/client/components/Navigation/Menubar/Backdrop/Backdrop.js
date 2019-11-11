import React from 'react';
import { useDispatch } from 'react-redux';
import { CLOSE_SIDE_DRAWER } from '../../../../redux/constants';
import './Backdrop.css';

const Backdrop = () => {
    const dispatch = useDispatch();
    return (
        <div className='backdrop' onClick={() => dispatch({ type: CLOSE_SIDE_DRAWER })} />
    );
};

export default Backdrop;
