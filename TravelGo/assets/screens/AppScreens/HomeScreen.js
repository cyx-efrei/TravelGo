import { StyleSheet, Text, View, PixelRatio, ScrollView,  } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <ScrollView stye={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.TitleScreen}>Explore</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  TitleContainer: {
    height: '100%',
    width: '100%',
    paddingVertical: 10 * PixelRatio.getFontScale(),
  },
  TitleScreen: {
    fontSize: 35,
    fontWeight: '600'
  }
})