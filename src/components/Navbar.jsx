import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
    // Close menu on navigation
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-main">
          <Link to="/" className="navbar-logo">Versavibe</Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          {/* Sliding Indicator (Only visible on desktop/large screens) */}
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
