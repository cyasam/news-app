import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import NewsList from '../components/NewsList';

const HomeScreenContainer = () => {
  const { homePage, handleSetHomePage } = useContext(AppContext);

  return (
    <NewsList
      headerText="Top Headlines"
      url={homePage.url}
      newsList={homePage.newsList}
      setNewsList={handleSetHomePage}
    />
  );
};

export default HomeScreenContainer;
