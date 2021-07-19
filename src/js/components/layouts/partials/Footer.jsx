import React from 'react';
import { EMAIL_ADDRESS } from '@constants';

const Footer = () => {
  const data = ['PRIVACY', 'COOKIE DISCLAIMER', 'TERMS OF USE']
  const copyright = `© Stryker 2021`
  return (
    <footer className="footer">
      <div className="container text-center">
        Footer
      </div>
    </footer>
  );
};

export default Footer;
