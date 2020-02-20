import config from '../../config';
import secrets from '../../config/secrets';

export const categoriesPageData = {
  list: [
    {
      id: 1,
      headerText: 'Sports',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=sports&apiKey=${secrets.NEWS_APIKEY}`,
    },
    {
      id: 2,
      headerText: 'Science',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=science&apiKey=${secrets.NEWS_APIKEY}`,
    },
    {
      id: 3,
      headerText: 'Business',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=business&apiKey=${secrets.NEWS_APIKEY}`,
    },
    {
      id: 4,
      headerText: 'Entertainment',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=entertainment&apiKey=${secrets.NEWS_APIKEY}`,
    },
    {
      id: 6,
      headerText: 'Technology',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=technology&apiKey=${secrets.NEWS_APIKEY}`,
    },
    {
      id: 7,
      headerText: 'Health',
      data: [],
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=health&apiKey=${secrets.NEWS_APIKEY}`,
    },
  ],
};
