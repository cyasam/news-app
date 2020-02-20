import React, { useContext, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import AppContext from '../context/AppContext';
import NewsList from '../components/NewsList';

const HomeScreenContainer = () => {
  const { homePage, handleSetHomePage } = useContext(AppContext);

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView ref={ref}>
      <NewsList
        headerText="Top Headlines"
        url={homePage.url}
        newsList={homePage.newsList}
        setNewsList={handleSetHomePage}
      />
    </ScrollView>
  );
};

export default HomeScreenContainer;
