import React from 'react';
import { StyleSheet, View } from 'react-native';

import NewsList from './NewsList';

const NewsGroupList = ({ allList, itemNumber, setNewsList }) => {
  const setCategoriesPage = (data, listId) => {
    setNewsList(data, listId);
  };

  return (
    <View>
      {Object.keys(allList).map(id => {
        const list = allList[id];

        return (
          <NewsList
            key={id}
            headerText={list.headerText}
            url={list.url}
            newsList={list.newsList}
            setNewsList={data => setCategoriesPage(data, id)}
            itemNumber={itemNumber}
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
