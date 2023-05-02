import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import * as colors from '../../../src/color'

export const History = ({ history }) => {
  const displayHistoryDetails = (index) => {
    const historyDetails = history[index];
    console.log(historyDetails);
  };

  // Extraire les deux derniers éléments de history

  if (!history || history.length === 0){
    return (
      <View style={styles.mainContainer1}>
        <Text style={styles.titleHistory}>What a void ..</Text>
        <Text style={styles.descriptionHistory}>Let's do your first research</Text>
      </View>
    )
  } else {
    const listItems = history.map((item, index) => (
      <View key={index}>
        <Text>{item.arrivee}</Text>
        <Text>{item.children}</Text>
        <Text>{item.depart}</Text>
        <Text>{item.numberDays}</Text>
        <Text>{item.showBudget}</Text>
      </View>
    ));
    
    return (
      <ScrollView style={styles.mainContainer2}>
          {history.map((item, index) => (
            <View style={styles.banniereData}>
              <TouchableOpacity style={styles.dataContainer} key={index}
                onPress={() => displayHistoryDetails(index)}>
                  <View style={styles.firstLine}>
                    <Text>FROM {item.arrivee} TO {item.depart}</Text>
                    <Text>{item.numberDays} Days</Text>
                  </View>
                  <View style={styles.firstLine}>
                    <Text>Children : {item.children ? "oui" : "non"}</Text>
                    <Text>Budget : {item.showBudget ? "oui" : "non"}</Text>
                  </View>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    
    
    )
  }
}

export default History

const styles = StyleSheet.create({

  //  VOID -- EMPTY
  mainContainer1:{
    flex : 1,
    padding: 20,
    //backgroundColor: 'green',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleHistory: {
    color: colors.black,
    fontSize: 18
  },
  descriptionHistory: {
    color: colors.primary,
    fontSize: 14,
    marginTop: 10
  },


  // FULL - NOT EMPTY
  mainContainer2:{
    flex : 1,
    padding: 20,
    //backgroundColor: 'green',
    height: '100%',
    width: '100%',
    marginVertical: 2
  },

  banniereData: {
    height: 100,
  },
  dataContainer: {
    width: '100%',
    height: '80%',
    //backgroundColor: 'red',
    //borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.3,
    justifyContent: 'space-between'
  },
  firstLine:{
    flexDirection: "row",
    justifyContent: 'space-between'
  }
  
})