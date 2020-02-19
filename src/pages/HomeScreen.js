import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import AppContext from '../context/AppContext';
import NewsFlatList from '../components/NewsFlatList';
import Container from '../components/Container';

const HomeScreen = () => {
  const { homePage, handleSetHomePage } = useContext(AppContext);

  return (
    <Container style={styles.container}>
      <NewsFlatList
        headerText="Top Headlines"
        url={homePage.url}
        newsList={homePage.newsList}
        setNewsList={handleSetHomePage}
        style={styles.newsList}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  newsList: {}
});

export default HomeScreen;
