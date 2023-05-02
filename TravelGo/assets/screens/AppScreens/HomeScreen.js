import { StyleSheet, Text, View, PixelRatio, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'

import DestinationSearch from '../Compornents/HomeScreenComponents/DestinationSearch';
import History from '../Compornents/HomeScreenComponents/History';
import * as colors from '../../src/color.js'

const w_screen = Dimensions.get('window').width;
const h_screen = Dimensions.get('window').height;


const history = []

const addHistory = (data) => {
  history.push(data);
  console.log("we add", history)
}

const HomeScreen = ({navigation}) => {
  return (
    // TO CHANGE TO SCOLL VIEW LATER MAYBE
    <View style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.topBack}>
          <Image source={require('../../img/Home_part/world_dott.png')} style={styles.map_dot} />
        </View>
        <View style={styles.topBar}>
          <Text style={styles.welcomeText}>Welcome Back !</Text>
        </View>
        <View style={styles.searchBar}>
          <DestinationSearch navigation={navigation} addHistory={addHistory}/>
        </View>
        <View style={styles.lastBar}>
          <Text style={styles.ticketTitle}>Last Search</Text>
          <View style={styles.ticketPad}>
            <History history={history}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ECF0FD',
    // marginHorizontal: 20,
  },
  topBack: {
    paddingTop: 20,
    backgroundColor: '#07184B',
    height: h_screen/3.3,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  map_dot:{
    width: '100%',
    height: '100%'
  },
  topBar: {
    position: 'absolute',
    left: w_screen/10,
    top : h_screen/16,
  },
  welcomeText: {
    fontSize: 20,
    color: "white",
    top : 5
  },
  searchBar: {
    height: h_screen/2.1,
    width: w_screen/1.15,
    backgroundColor: "white",
    position: 'absolute',
    zIndex: 300,
    top : h_screen/7,
    alignSelf: 'center',
    borderRadius: 20
  },
  ///
  lastBar: {
    //backgroundColor: 'red',
    top : h_screen/3,
    height: h_screen/4,
    width: "90%",
    alignSelf: 'center',
  },
  ticketTitle: {
    marginLeft: 5,
    color: colors.grey
  },
  ticketPad: {
    backgroundColor: colors.white,
    height: '90%',
    top : 5,
    borderRadius: 30
  }
})