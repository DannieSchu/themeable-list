import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsItem.css';

const NewsItem = ({ source, author, title, url, image, date }) => {
  return (
    <section className={styles.NewsItem}>
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

NewsItem.propTypes = {
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default NewsItem;

