import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import NoResult from './NoResult';

const fetchNewsList = url => {
  return fetch(url).then(response => response.json());
};

const NewsList = ({
  style,
  headerText,
  url,
  newsList,
  setNewsList,
  itemNumber,
}) => {
  const numColumns = 1;
  const itemWidth = 100 / numColumns;

  useEffect(() => {
    const makeFetchNewsList = async () => {
      const { articles } = await fetchNewsList(url);

      const news = articles.slice(0, itemNumber);
      setNewsList(news);
    };

    makeFetchNewsList();
  }, []);

  if (!newsList) {
    return null;
  }

  return (
    <View style={[styles.list, style]}>
      <ListHeader>
        <Text>{headerText}</Text>
      </ListHeader>

      <View>
        {newsList.length ? (
          newsList.map((item, index) => {
            return (
              <ListItem
                style={{
                  width: `${itemWidth}%`,
                }}
                key={index}
                item={item}
              />
            );
          })
        ) : (
          <NoResult />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 14,
  },
});

export default NewsList;
