import React from 'react';
import styles from './Header.css';
import Toggle from '../Toggle/Toggle';
import { useToggle, useCountry } from '../../hooks/NewsProvider';

const Header = () => {
  const toggle = useToggle();
  const country = useCountry();

  return (
    <header className={styles.Header}>
      <h1>Cross-Pond Newsroom</h1>
      <section>
        <span>UK</span>
        <Toggle toggle={toggle} value={country === 'us'} />
        <span>US</span>
      </section>
    </header>
  );
};

export default Header;
