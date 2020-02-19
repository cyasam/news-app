import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimeAgo from 'react-native-timeago';

import NewsSource from './NewsSource';

const ListItemBottom = ({ style, source, publishedAt }) => {
  return (
    <View style={[styles.container, style]}>
      <NewsSource source={source} />
      <TimeAgo time={publishedAt} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff'
  }
});

export default ListItemBottom;
