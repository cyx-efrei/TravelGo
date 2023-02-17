import React, { useState } from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, View, TextInput, PixelRatio } from 'react-native'

const SearchScreen = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#ccc"
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        />
      <MapView style={styles.map} />
    </View>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(22),
    width: '80%',
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    paddingHorizontal: 20,
    borderColor: '#C7D3DD',
    borderWidth: 1.8,
    zIndex: 10,
    backgroundColor: 'white',
    color: '#37393A',
    borderRadius: 20,
    opacity: 0.95,
    fontSize: 16,
  }
})