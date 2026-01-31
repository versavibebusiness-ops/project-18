import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Find the active link based on current path
    const paths = ['/', '/store'];
    const activeIndex = paths.indexOf(location.pathname);

    if (activeIndex !== -1 && navLinksRef.current[activeIndex]) {
      const element = navLinksRef.current[activeIndex];
      setIndicatorStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
        opacity: 1
      });
    } else {
      // Hide if no match (shouldn't happen with current routes, but good for safety)
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Versavibe</Link>
        <div className="navbar-links">
          {/* Sliding Indicator */}
          <div
            className="nav-indicator"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
          />

          <Link
            to="/"
            ref={el => navLinksRef.current[0] = el}
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/store"
            ref={el => navLinksRef.current[1] = el}
            className={`nav-link ${location.pathname === '/store' ? 'active' : ''}`}
          >
            Store
          </Link>
          <Link to="/store" className="navbar-btn">Browse</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
