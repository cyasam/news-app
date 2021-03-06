import React, { useRef } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import NoResult from './NoResult';

const NewsFlatList = ({ style, headerText, newsList, scrollEnabled }) => {
  const numColumns = 1;
  const itemWidth = 100 / numColumns;

  const ref = useRef(null);
  useScrollToTop(ref);

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
