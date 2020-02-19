import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AppHeader from './AppHeader';

const ListHeader = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <AppHeader>{children}</AppHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  }
});

export default ListHeader;
