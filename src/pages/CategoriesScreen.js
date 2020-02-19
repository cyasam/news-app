import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import AppContext from '../context/AppContext';
import NewsList from '../components/NewsList';
import Container from '../components/Container';
import { ScrollView } from 'react-native-gesture-handler';

const CategoriesScreen = () => {
  const { categoriesPage, handleSetCategoriesPage } = useContext(AppContext);

  return (
    <Container style={styles.container}>
      <ScrollView>
        {Object.keys(categoriesPage.list).map(id => {
          const list = categoriesPage.list[id];

          return (
            <NewsList
              key={id}
              listId={id}
              headerText={list.headerText}
              url={list.url}
              newsList={list.newsList}
              setNewsList={handleSetCategoriesPage}
              itemNumber={5}
              style={styles.newsList}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  newsList: {}
});

export default CategoriesScreen;
