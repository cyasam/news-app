import React from 'react';

const AppContext = React.createContext({
  homePage: {
    newsList: null,
    url: null,
  },
  categoriesPage: {
    list: null,
  },
  handleSetHomePage: () => {},
  handleSetCategoriesPage: () => {},
});

export default AppContext;
