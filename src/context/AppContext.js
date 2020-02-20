import React from 'react';

const AppContext = React.createContext({
  connection: null,
  homePage: {
    data: null,
    url: null,
  },
  categoriesPage: {
    list: null,
  },
  handleSetConnection: () => {},
  handleSetHomePage: () => {},
  handleSetCategoriesPage: () => {},
});

export default AppContext;
