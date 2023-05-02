import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Oooops, we encountered an error..</Text>
      <TouchableOpacity style={styles.goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack:{
  }
})