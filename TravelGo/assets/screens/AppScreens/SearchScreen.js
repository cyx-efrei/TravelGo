import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})