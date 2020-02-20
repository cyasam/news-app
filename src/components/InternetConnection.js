import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import AppText from './AppText';
import AppContext from '../context/AppContext';

const InternetConnection = WrappedComponent => props => {
  const { connection, handleSetConnection } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      handleSetConnection(state);
    });

    return unsubscribe;
  }, []);

  if (!connection) {
    return null;
  }

  const NoConnection = () => (
    <View style={styles.noConnection}>
      <AppText style={styles.noConnectionText}>You're offline...</AppText>
      <AppText style={styles.noConnectionText}>
        Please check your internet connection
      </AppText>
    </View>
  );

  return (
    <View style={styles.container}>
      <WrappedComponent {...props} />
      {!connection.isInternetReachable && <NoConnection />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  noConnection: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14,
    backgroundColor: '#C2185B',
    alignItems: 'center',
  },
  noConnectionText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default InternetConnection;
