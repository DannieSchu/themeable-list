import React from 'react';
import styles from './Header.css';
import Toggle from '../Toggle/Toggle';
import { useToggle, useCountry, usePaging, usePageNumber } from '../../hooks/NewsProvider';
import Paging from '../Paging/Paging';

const Header = () => {
  const toggle = useToggle();
  const country = useCountry();
  const incrementPage = usePaging();
  const page = usePageNumber();

  return (
    <header className={styles.Header}>
      <section>
        <h1>Cross-Pond Newsroom</h1>
        <Paging incrementPage={incrementPage} page={page}/>
      </section>
      <section>
        <span>UK</span>
        <Toggle toggle={toggle} value={country === 'us'} />
        <span>US</span>
      </section>
    </header>
  );
};

export default Header;
