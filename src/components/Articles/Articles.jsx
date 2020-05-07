import React from 'react';
import Article from './Article.jsx';
import { useArticles } from '../../hooks/NewsProvider.jsx';

const Articles = () => {
  const articles = useArticles();

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

export default Articles;
