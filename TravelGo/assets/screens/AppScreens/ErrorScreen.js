import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ErrorScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Oooops, we encountered an error..</Text>
            <TouchableOpacity style={styles.goBack}
                onPress={navigation.navigate('Home')}>
            <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack:{
    marginTop: 10,
    width: 130,
    backgroundColor: 'blue',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})