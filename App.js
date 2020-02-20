import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import { homePageData } from './src/data/home-page';
import { categoriesPageData } from './src/data/categories-page';

import AppContext from './src/context/AppContext';
import Navigation from './src/Navigation';

const AppContextProvider = AppContext.Provider;

export default function App() {
  const [homePage, setHomePage] = useState(homePageData);
  const [categoriesPage, setCategoriesPage] = useState(categoriesPageData);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      });

      setFontLoaded(true);
    };

    loadFont();
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <AppContextProvider
      value={{
        homePage,
        categoriesPage,
        handleSetHomePage: data => {
          setHomePage(currentHomePage => ({
            ...currentHomePage,
            newsList: data,
          }));
        },
        handleSetCategoriesPage: (data, id) => {
          setCategoriesPage(currentCategoriesPage => {
            currentCategoriesPage.list[id].newsList = data;
            return {
              ...currentCategoriesPage,
            };
          });
        },
      }}
    >
      <Navigation />
    </AppContextProvider>
  );
}
