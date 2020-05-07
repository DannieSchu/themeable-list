// top headlines (pass in 'us' or 'gb' for country)
export const fetchNews = (country, page = 1) => {
  return fetch(`http://newsapi.org/v2/top-headlines?pageSize=10&page=${page}&country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(response => response.json())
    .then(json => json.articles.map(article => ({
      source: article.source.name,
      author: article.author,
      title: article.title,
      url: article.url,
      image: article.urlToImage,
      date: article.publishedAt
    })));
};
