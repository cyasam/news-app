import config from '../../config';
import secrets from '../../config/secrets';

export const homePageData = {
  data: null,
  url: `${config.NEWS_APIURL}/top-headlines?country=us&apiKey=${secrets.NEWS_APIKEY}`,
};
