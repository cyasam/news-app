import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';
import { Image } from 'react-native-expo-image-cache';

import AppHeader from './AppHeader';
import AppText from './AppText';

import ListItemBottom from './ListItemBottom';

const ListItem = ({ style, item }) => {
  return (
    <View style={[styles.item, style]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Linking.openURL(item.url)}
      >
        {item.urlToImage && (
          <Image style={styles.image} uri={item.urlToImage} />
        )}
        <View style={styles.itemDetail}>
          <AppHeader style={styles.title}>{item.title}</AppHeader>
          <AppText style={styles.description}>{item.description}</AppText>

          <ListItemBottom
            style={styles.listItemBottom}
            source={item.source}
            publishedAt={item.publishedAt}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#C2185B',
    overflow: 'hidden'
  },
  itemDetail: {
    padding: 15
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc'
  },
  title: {
    fontSize: 18,
    marginBottom: 14,
    color: '#fff'
  },
  description: {
    fontSize: 14,
    color: '#fff'
  },
  listItemBottom: {
    marginTop: 14
  }
});

export default ListItem;
