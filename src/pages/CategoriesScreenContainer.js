import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import NewsGroupList from '../components/NewsGroupList';

const CategoriesScreenContainer = () => {
  const { categoriesPage, handleSetCategoriesPage } = useContext(AppContext);

  return (
    <NewsGroupList
      allList={categoriesPage.list}
      setNewsList={handleSetCategoriesPage}
      itemNumber={5}
    />
  );
};

export default CategoriesScreenContainer;
