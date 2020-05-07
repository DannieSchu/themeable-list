import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchNews } from '../services/newsAPI.jsx';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews('us', 1)
      .then(fetchedArticles => setArticles(fetchedArticles));
  }, []);

  return (
    <NewsContext.Provider value={{ articles }}>
      {children}
    </NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: PropTypes.node
};

export const useArticles = () => {
  const { articles } = useContext(NewsContext);
  return articles;
};
