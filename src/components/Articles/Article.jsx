import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = ({ source, author, title, url, image, date }) => {
  
  return (
    <section className={styles.Article}>
      <img src={image} alt={title} />
      <div>
        <a href={url}>{title}</a>
        <h3>{source}</h3>
        <p>Author: {author}</p>
        <p>Date published: {date}</p>
      </div>
    </section>
  );
};

Article.propTypes = {
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default Article;

