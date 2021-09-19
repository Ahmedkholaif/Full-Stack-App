import React from 'react';
// import i18next from '../../i18next/i18next';
// import styles from './Footer.module.scss';

const Footer = () => (
  <div >
    {/* <p>{i18next.t('appTitle')}</p> */}
    <p>{process.env.REACT_APP_VERSION}</p>
  </div>
);
export default Footer;
