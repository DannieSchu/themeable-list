import React from 'react';
import Articles from '../Articles/Articles';
import { NewsProvider } from '../../hooks/NewsProvider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <NewsProvider>
      <Header />
      <Articles />
      <Footer />
    </NewsProvider>
  );
}
