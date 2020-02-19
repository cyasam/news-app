import config from '../../config';
import secrets from '../../config/secrets';

export const categoriesPageData = {
  list: {
    1: {
      id: 1,
      headerText: 'Sports',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=sports&apiKey=${secrets.NEWS_APIKEY}`
    },
    2: {
      id: 2,
      headerText: 'Science',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=science&apiKey=${secrets.NEWS_APIKEY}`
    },
    3: {
      id: 3,
      headerText: 'Business',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=business&apiKey=${secrets.NEWS_APIKEY}`
    },
    4: {
      id: 4,
      headerText: 'Entertainment',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=entertainment&apiKey=${secrets.NEWS_APIKEY}`
    },
    6: {
      id: 6,
      headerText: 'Technology',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=technology&apiKey=${secrets.NEWS_APIKEY}`
    },
    7: {
      id: 7,
      headerText: 'Health',
      newsList: null,
      url: `${config.NEWS_APIURL}/top-headlines?country=us&category=health&apiKey=${secrets.NEWS_APIKEY}`
    }
  }
};
