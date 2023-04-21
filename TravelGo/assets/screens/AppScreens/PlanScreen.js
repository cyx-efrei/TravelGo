import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react'

import { getFontSize } from '../../config'
import * as colors from '../../src/color.js'

const w_screen = Dimensions.get('window').width;
const h_screen = Dimensions.get('window').height;

// FOR ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Search_Google_Places from '../Compornents/Google_api_Components/Search_Google_Places';

const apiKey = 'AIzaSyCgNDBKgFnfGGGxgeZixvu8AGB8_gkw_w0'

const PlanScreen = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <View style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.topBack}>
          <Image source={require('../../img/Home_part/world_dott.png')} style={styles.map_dot} />
        </View>
        <View style={styles.topBar}>
          <Text style={styles.welcomeText}>Explore the beautiful places !</Text>
        </View>
        <View style={styles.inputPlace}>
          <Icon name="airplane-landing" size={24} color="black"/>
          <TextInput style={styles.InputText}
            value={searchInput}
            placeholder="Place"
            onChangeText={text => setSearchInput(text)}
          />
        </View>
        
      </View>
    </View>
  )
}

export default PlanScreen

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
    top : h_screen/15,
    width: w_screen/2.5,

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
    backgroundColor: "white",
    height: '90%',
    top : 5,
    borderRadius: 30
  },
  inputText: {
    position: 'relative',
    width: '85%',
    zIndex: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e4e5e7',
    color: '#37393A',
    borderRadius: 30,
    opacity: 0.95,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})


//const styles = StyleSheet.create({
//  mainContainer: {
//    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
//    marginHorizontal: 20,
//    justifyContent: 'center',
//    alignItems: 'center'
//  },
//  inputContainer: {
//    width: '100%',
//    // borderWidth: 1,
//    height: PixelRatio.getPixelSizeForLayoutSize(30),
//    flexDirection: 'row',
//    justifyContent: 'space-between',
//    alignItems: 'center',
//    paddingHorizontal: 10,
//  },
//  introScreen: {
//    fontSize: getFontSize(17),
//    color: '#37393A',
//  },
//  inputText: {
//    position: 'relative',
//    width: '85%',
//    height: PixelRatio.getPixelSizeForLayoutSize(18),
//    zIndex: 10,
//    paddingHorizontal: 15,
//    backgroundColor: '#e4e5e7',
//    color: '#37393A',
//    borderRadius: 30,
//    opacity: 0.95,
//    fontSize: 16,
//    flexDirection: 'row',
//    justifyContent: 'flex-start',
//    alignItems: 'center'
//  },
//  filterBack: {
//    backgroundColor: '#08C5D1',
//    borderRadius: 20,
//    padding: 7,
//  }
//})