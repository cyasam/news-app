import React, { useContext, useEffect } from 'react';

import AppContext from '../context/AppContext';
import NewsFlatList from '../components/NewsFlatList';

import { fetchUrl } from '../utils';

const HomeScreenContainer = () => {
  const { connection, homePage, handleSetHomePage } = useContext(AppContext);

  useEffect(() => {
    const makeFetchNewsList = async () => {
      const { articles } = await fetchUrl(homePage.url);

      handleSetHomePage(articles);
    };

    makeFetchNewsList();
  }, [connection.isConnected]);

  return <NewsFlatList headerText="Top Headlines" newsList={homePage.data} />;
};

export default HomeScreenContainer;
