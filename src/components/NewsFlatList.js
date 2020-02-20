import React, { useEffect, useRef } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import NoResult from './NoResult';

const fetchNewsList = url => {
  return fetch(url).then(response => response.json());
};

const NewsFlatList = ({
  style,
  headerText,
  url,
  newsList,
  setNewsList,
  scrollEnabled,
}) => {
  const numColumns = 1;
  const itemWidth = 100 / numColumns;

  const ref = useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    const makeFetchNewsList = async () => {
      const news = await fetchNewsList(url);
      setNewsList({ newsList: news.articles });
    };

    makeFetchNewsList();
  }, []);

  if (!newsList) {
    return null;
  }

  return (
    <FlatList
      ref={ref}
      style={[styles.list, style]}
      data={newsList}
      horizontal={false}
      scrollEnabled={scrollEnabled}
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
              width: `${itemWidth}%`,
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
    paddingHorizontal: 14,
  },
});

export default NewsFlatList;
