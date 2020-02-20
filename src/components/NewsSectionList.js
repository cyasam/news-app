import React, { useRef } from 'react';
import { StyleSheet, Text, SectionList } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import NoResult from './NoResult';

const NewsSectionList = ({ style, allList, scrollEnabled }) => {
  const numColumns = 1;
  const itemWidth = 100 / numColumns;

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <SectionList
      ref={ref}
      style={[styles.list, style]}
      sections={allList}
      horizontal={false}
      scrollEnabled={scrollEnabled}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <NoResult />}
      renderSectionHeader={({ section }) => (
        <ListHeader>
          <Text>{section.headerText}</Text>
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

export default NewsSectionList;
