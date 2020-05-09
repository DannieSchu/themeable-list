# Cross-Pond Newsroom

**Author:** Dannie Schumaker

## Overview
This news application allows users to view articles from the US and the UK in one place! Toggle between two different views to render headlines from your country choice in corresponding color schemes. Article lists are paginated for improved UX.

## Technologies
React, Jest, Enzyme, PostCSS

## Approach
1. Stored state globally using the Context API.
   * Toggle triggers different color schemes and API URL.
2. Built out each presentation component individually with snapshot tests and CSS. 
3. Maintained a functioning app as new features were added by adhering to agile methodologies.
4. Accessibility considerations:
   * Limited non-semantic elements when possible.
   * Included alt text for images.
   * Used sufficient hue/value contrast.
   * Accessibility score: 95.

## API Endpoint
Retrieved data for country ('us' or 'gb') from the News API: 
`http://newsapi.org/v2/top-headlines?pageSize=10&page=<PAGE_NUMBER>&country=<COUNTRY>&apiKey=<API_KEY>`

## Getting Started
1. Clone and download GitHub repo.
2. Install dependencies:<br/>
   `npm i`
3. Run scripts:<br/>
   `npm run test`<br/>
   `npm run test:watch`<br/>
   `npm run start`<br/>
   `npm run build`<br/>
4. Retrieve Developer Key from [News API](https://newsapi.org/ "newsapi.org"); store key in `.env` file as `REACT_APP_NEWS_API_KEY`.
   
