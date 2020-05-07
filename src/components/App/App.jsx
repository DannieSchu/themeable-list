import React from 'react';
import Articles from '../Articles/Articles';
import { NewsProvider } from '../../hooks/NewsProvider';
import Toggle from '../Toggle/Toggle';

export default function App() {
  return (
    <NewsProvider>
      <Toggle />
      {/* <Articles /> */}
    </NewsProvider>
  );
}
