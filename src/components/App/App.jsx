import React from 'react';
import Articles from '../Articles/Articles';
import { NewsProvider } from '../../hooks/NewsProvider';

export default function App() {
  return (
    <NewsProvider>
      <Articles />
    </NewsProvider>
  );
}
