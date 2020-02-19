import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppHeader = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: 'open-sans-semibold'
  }
});

export default AppHeader;
