import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoMark from './LogoMark';

const SideTabs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/the-numbers', label: 'Numbers' },
    { path: '/why-it-happens', label: 'Why' },
    { path: '/know-the-law', label: 'Laws' },
    { path: '/get-help', label: 'Help' },
    { path: '/about-us', label: 'About' },
    { path: '/references', label: 'References' }
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
    };
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
    updateHeaderHeight();

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--site-header-height');
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Usapang Totoo home">
          <LogoMark className="site-logo-mark" />
          <span className="brand-text">
            <span className="brand-name">USAPANG TOTOO</span>
            <span className="brand-tagline">Teenage Pregnancy sa Pilipinas</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`nav-link ${location.pathname === tab.path ? 'active' : ''}`}
              aria-current={location.pathname === tab.path ? 'page' : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          ☰ Menu
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`mobile-nav-link ${location.pathname === tab.path ? 'active' : ''}`}
            aria-current={location.pathname === tab.path ? 'page' : undefined}
            onClick={toggleMenu}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default SideTabs;
