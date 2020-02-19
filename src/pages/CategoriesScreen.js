import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import AppContext from '../context/AppContext';
import NewsList from '../components/NewsList';
import Container from '../components/Container';

const CategoriesScreen = () => {
  const { categoriesPage, handleSetCategoriesPage } = useContext(AppContext);

  return (
    <Container style={styles.container}>
      <NewsList
        headerText="Health"
        url={categoriesPage.url}
        newsList={categoriesPage.newsList}
        setNewsList={handleSetCategoriesPage}
        style={styles.newsList}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  newsList: {}
});

export default CategoriesScreen;
