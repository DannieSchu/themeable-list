import React from 'react';
import { usePaging, usePageNumber } from '../../hooks/NewsProvider';
import Paging from '../Paging/Paging';

const Footer = () => {
  const incrementPage = usePaging();
  const page = usePageNumber();

  return (
    <footer>
      <Paging incrementPage={incrementPage} page={page}/>
    </footer>
  );
};

export default Footer;

