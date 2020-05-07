import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ incrementPage, page }) => {
  return (
    <div>
      <button onClick={() => incrementPage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => incrementPage(1)} disabled={page === 4}>&gt;</button>
    </div>
  );
};

Paging.propTypes = {
  incrementPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default Paging;

