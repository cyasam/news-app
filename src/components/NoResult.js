import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AppText = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.icon}>
        <AntDesign name="warning" color="#fff" size={26} />
      </View>
      <Text style={styles.text}>We couldn't find any news!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#C2185B'
  },
  icon: {
    marginRight: 12
  },
  text: {
    color: '#fff'
  }
});

export default AppText;
