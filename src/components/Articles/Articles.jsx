import React from 'react';
import Article from './Article.jsx';
import { useArticles, useCountry } from '../../hooks/NewsProvider.jsx';
import styles from './Articles.css';

const Articles = () => {
  const articles = useArticles();
  const country = useCountry();

  const articleEntries = articles.map((article, i) => (
    <li key={i}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul className={`${styles.Articles} ${styles[country]}`}>
      {articleEntries}
    </ul>
  );
};

export default Articles;
