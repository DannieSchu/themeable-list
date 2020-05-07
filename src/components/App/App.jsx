import React from 'react';
import Articles from '../Articles/Articles';

export default function App() {
  const articles = [{
    source: 'TechRadar',
    author: 'some author',
    title: 'Microsoft Surface Book 3 and Surface Go 2 launch, and that’s bad news for Apple',
    url: 'https://www.techradar.com/news/microsoft-aims-to-take-on-apple-with-most-powerful-ever-surface-book-3-and-improved-surface-go-2',
    image: 'https://cdn.mos.cms.futurecdn.net/j57b7QnfnaXNpLfXN9ssy-1200-80.jpg',
    date: '2020-05-06T20:46:23Z'
  },
  {
    source: 'TechRadar',
    author: 'some author',
    title: 'Microsoft Surface Book 3 and Surface Go 2 launch, and that’s bad news for Apple',
    url: 'https://www.techradar.com/news/microsoft-aims-to-take-on-apple-with-most-powerful-ever-surface-book-3-and-improved-surface-go-2',
    image: 'https://cdn.mos.cms.futurecdn.net/j57b7QnfnaXNpLfXN9ssy-1200-80.jpg',
    date: '2020-05-06T20:46:23Z'
  }];

  return <Articles articles={articles}
  />;
}
