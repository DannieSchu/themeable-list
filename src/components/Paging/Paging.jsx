import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css'

const Paging = ({ incrementPage, page }) => {
  return (
    <article className={styles.Paging}>
      <button onClick={() => incrementPage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => incrementPage(1)} disabled={page === 4}>&gt;</button>
    </article>
  );
};

Paging.propTypes = {
  incrementPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default Paging;

