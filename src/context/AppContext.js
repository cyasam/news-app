import React from 'react';

const AppContext = React.createContext({
  homePage: {
    newsList: null,
    url: null
  },
  categoriesPage: {
    newsList: null,
    url: null
  },
  handleSetHomePage: () => {},
  handleSetCategoriesPage: () => {}
});

export default AppContext;
