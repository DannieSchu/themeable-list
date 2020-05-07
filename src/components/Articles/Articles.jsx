import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article.jsx';

const Articles = ({ articles }) => {
  const articleEntries = articles.map((article, i) => (
    <li key={i}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleEntries}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
  })).isRequired
};

export default Articles;

