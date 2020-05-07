# Cross-Pond Newsroom

**Author:** Dannie Schumaker

## Overview
This news application allows users to view articles from the US and the UK in one place! Toggle between two different views to render headlines from your country choice in corresponding color schemes. Article lists are paginated for improved UX.

## Technologies
React, Jest, Enzyme, PostCSS

## Approach
1. Stored state globally using the Context API.
   * Facilitated implementation of different color schemes based on toggle.
2. Built out each presentation component individually with snapshot tests and CSS. 
3. Maintained a functioning app as new features were added by adhering to agile methodologies.
4. Considered accessibility
   * Limited non-semantic elements when possible; included alt text for images
   * Accessibility score: 95 

## API Endpoint
Retrieved data for country ('us' or 'gb') from the News API: 
`http://newsapi.org/v2/top-headlines?pageSize=10&page=<PAGE_NUMBER>&country=<COUNTRY>&apiKey=<API_KEY>`

## Getting Started
1. Clone and download GitHub repo
2. Install dependencies:<br/>
   `npm i`
3. Run scripts:<br/>
   `npm run test`<br/>
   `npm run test:watch`<br/>
   `npm run start`<br/>
   `npm run build`<br/>
4. Get Developer Key from News API
