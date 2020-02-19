import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

const NewsSource = ({ style, source }) => {
  return (
    <View style={[styles.source, style]}>
      <View style={styles.sourceIcon}>
        <MaterialCommunityIcons name="newspaper" size={20} color="#fff" />
      </View>

      <AppText style={styles.text}>{source.name}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  source: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sourceIcon: {
    marginRight: 5
  },
  text: {
    color: '#fff'
  }
});

export default NewsSource;
