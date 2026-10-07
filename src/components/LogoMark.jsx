import React from 'react';

function LogoMark({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="Usapang Totoo logo mark"
      className={className ? `site-logo-mark ${className}` : 'site-logo-mark'}
    />
  );
}

export default LogoMark;
