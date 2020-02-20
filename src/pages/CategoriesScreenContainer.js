import React, { useContext, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import AppContext from '../context/AppContext';
import NewsGroupList from '../components/NewsGroupList';

const CategoriesScreenContainer = () => {
  const { categoriesPage, handleSetCategoriesPage } = useContext(AppContext);

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView ref={ref}>
      <NewsGroupList
        allList={categoriesPage.list}
        setNewsList={handleSetCategoriesPage}
        itemNumber={5}
      />
    </ScrollView>
  );
};

export default CategoriesScreenContainer;
