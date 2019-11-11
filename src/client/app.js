import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Navigation from './components/Navigation/Navigation';

export function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const App = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(
    () => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', debounce(handleScroll));
      return () => window.removeEventListener('scroll', debounce(handleScroll));
    },
    [] // If you remove this, things go 🍌🍌🍌
  );
  console.log(scrollY);

  return (
    <div className="App" >
      <Navigation />
    </div>
  );
};

export default hot(App);
