import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchNews } from '../services/newsAPI';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('us');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews(country, page)
      .then(fetchedArticles => setArticles(fetchedArticles));
  }, [country, page]);

  const toggle = ({ target }) => {
    target.checked ? setCountry('us') : setCountry('gb');
  };

  const incrementPage = increment => setPage(prevPage => prevPage + increment);

  return (
    <NewsContext.Provider value={{ articles, toggle, country, incrementPage, page }}>
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

export const usePaging = () => {
  const { incrementPage } = useContext(NewsContext);
  return incrementPage;
};

export const usePageNumber = () => {
  const { page } = useContext(NewsContext);
  return page;
};
