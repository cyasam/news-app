import React from 'react';
import { StyleSheet, View } from 'react-native';

import NewsList from './NewsList';

const NewsGroupList = ({ allList }) => {
  return (
    <View>
      {Object.keys(allList).map(id => {
        const list = allList[id];

        return (
          <NewsList
            key={id}
            headerText={list.headerText}
            newsList={list.newsList}
            style={styles.newsList}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  newsList: {},
});

export default NewsGroupList;
