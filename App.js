import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import secrets from './config/secrets';
import config from './config';

import AppContext from './src/context/AppContext';
import Navigation from './src/Navigation';

const AppContextProvider = AppContext.Provider;

export default function App() {
  const [homePage, setHomePage] = useState({
    newsList: null,
    url: `${config.NEWS_APIURL}/top-headlines?country=us&apiKey=${secrets.NEWS_APIKEY}`
  });
  const [categoriesPage, setCategoriesPage] = useState({
    newsList: null,
    url: `${config.NEWS_APIURL}/top-headlines?country=us&category=health&apiKey=${secrets.NEWS_APIKEY}`
  });
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
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
            ...data
          }));
        },
        handleSetCategoriesPage: data => {
          setCategoriesPage(currentCategoriesPage => ({
            ...currentCategoriesPage,
            ...data
          }));
        }
      }}
    >
      <Navigation />
    </AppContextProvider>
  );
}
