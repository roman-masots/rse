import React from 'react';
import { useSelector } from 'react-redux';
import './SideDrawer.css';

const SideDrawer = () => {
    const sideDrawer = useSelector((state) => state.toggleSideDrawer.sideDrawer);

    let drawerClasses = 'side-drawer';
    if (sideDrawer) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Prices</a></li>
                <li><a href='/'>Contact</a></li>
                <li><a href='/'>Sign Up</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
