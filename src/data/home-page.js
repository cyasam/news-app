import config from '../../config';
import secrets from '../../config/secrets';

export const homePageData = {
  newsList: null,
  url: `${config.NEWS_APIURL}/top-headlines?country=us&apiKey=${secrets.NEWS_APIKEY}`
};
