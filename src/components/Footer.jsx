import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="help-banner">
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Need help right now? <Link to="/get-help">Visit the Get Help page →</Link>
          </p>
        </div>

        <p className="disclaimer">
          This website is for educational purposes only. It is not medical or legal advice.
        </p>

        <p className="handwritten" style={{ fontSize: '0.9rem' }}>
          Created for Gender and Society class • School Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
