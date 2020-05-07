import React from 'react';
import styles from './Header.css';
import Toggle from '../Toggle/Toggle';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Cross-Pond Newsroom</h1>
      <section>
        <span>US</span>
        <Toggle />
        <span>UK</span>
      </section>
    </header>
  );
};

export default Header;
