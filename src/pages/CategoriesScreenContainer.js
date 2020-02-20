import React, { useContext, useEffect } from 'react';

import AppContext from '../context/AppContext';
import NewsSectionList from '../components/NewsSectionList';
import { fetchUrl } from '../utils';

const CategoriesScreenContainer = () => {
  const { connection, categoriesPage, handleSetCategoriesPage } = useContext(
    AppContext,
  );
  const itemNumber = 5;

  useEffect(() => {
    Object.keys(categoriesPage.list).map(async id => {
      const list = categoriesPage.list[id];
      const { articles } = await fetchUrl(list.url);

      const news = articles.slice(0, itemNumber);
      handleSetCategoriesPage(news, id);
    });
  }, [connection.isConnected]);

  return <NewsSectionList allList={categoriesPage.list} />;
};

export default CategoriesScreenContainer;
