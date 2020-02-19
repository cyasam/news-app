import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import NoResult from './NoResult';

const fetchNewsList = url => {
  return fetch(url).then(response => response.json());
};

const NewsList = ({ style, headerText, url, newsList, setNewsList }) => {
  const numColumns = 1;

  const itemWidth = 100 / numColumns;

  useEffect(() => {
    const makeFetchNewsList = async () => {
      const news = await fetchNewsList(url);
      setNewsList({ newsList: news.articles });
    };

    makeFetchNewsList();
  }, []);

  return (
    <FlatList
      style={[styles.list, style]}
      data={newsList}
      horizontal={false}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <NoResult />}
      ListHeaderComponent={() => (
        <ListHeader>
          <Text>{headerText}</Text>
        </ListHeader>
      )}
      renderItem={({ item }) => {
        return (
          <ListItem
            style={{
              width: `${itemWidth}%`
            }}
            item={item}
          />
        );
      }}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 14
  }
});

export default NewsList;
