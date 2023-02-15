import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function First_page() {
  return (
    <SafeAreaView style={styles.main_container}>
      <Text>first_page</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 15,
  }
})