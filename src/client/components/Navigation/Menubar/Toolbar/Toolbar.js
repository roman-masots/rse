import React from 'react';
import { useSelector } from 'react-redux';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = () => {
  const floatNavbar = useSelector((state) => state.toggleFloatNavbar.floatNavbar);

  return (
    <div id="navbar">
      {floatNavbar ? (
        <header className="toolbar floatToolbar">
          <nav className="toolbar_navigation floatNavbar">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton />
            </div>
            <div className="toolbar_navigation-items floatToolbar_navigation-items">
              <ul className="navbarUlList">
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Prices</a>
                </li>
              </ul>
            </div>
            <div className="toolbar_navigation-items floatToolbar_navigation-items">
              <ul className="navbarUlList">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Sign Up</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      ) : (
          <header className="toolbar stickyToolbar">
            <nav className="toolbar_navigation stickyToolbar_navigation">
              <div className="toolbar_toggle-button">
                <DrawerToggleButton />
              </div>
              <div className="toolbar_navigation-items stickyToolbar_navigation-items">
                <ul className="navbarUlList">
                  <li>
                    <a className="active" href="/">
                      Home
                  </a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Prices</a>
                  </li>
                </ul>
              </div>

              <div className="toolbar_navigation-items stickyToolbar_navigation-items">
                <ul className="navbarUlList">
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Sign Up</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        )}
    </div>
  );
};

export default Toolbar;
