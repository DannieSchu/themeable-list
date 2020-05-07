import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchNews } from '../services/newsAPI';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('us');

  useEffect(() => {
    fetchNews(country, 1)
      .then(fetchedArticles => setArticles(fetchedArticles));
  }, [country]);

  const toggle = ({ target }) => {
    target.checked ? setCountry('us') : setCountry('gb');
  };

  return (
    <NewsContext.Provider value={{ articles, toggle, country }}>
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

export const useToggle = () => {
  const { toggle } = useContext(NewsContext);
  return toggle;
};

export const useCountry = () => {
  const { country } = useContext(NewsContext);
  return country;
};
