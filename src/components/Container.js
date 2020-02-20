import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const Container = ({ style, children }) => {
  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView ref={ref}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
