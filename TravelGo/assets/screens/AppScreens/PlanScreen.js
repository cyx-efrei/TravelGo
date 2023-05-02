import { StyleSheet, Text, View, Image, Dimensions, TextInput, FlatList, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'

import { getFontSize } from '../../config'
import * as colors from '../../src/color.js'

import places from '../../src/const/places';

const w_screen = Dimensions.get('window').width;
const h_screen = Dimensions.get('window').height;

// FOR ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Search_Google_Places from '../Compornents/Google_api_Components/Search_Google_Places';

const apiKey = 'AIzaSyCgNDBKgFnfGGGxgeZixvu8AGB8_gkw_w0'

const PlanScreen = () => {

  const [searchInput, setSearchInput] = useState('')


  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Alert.alert("ÇA ARRIVE CALMATE")
        //navigation.navigate('DetailsScreen', place)
        }>
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              {/*<Icon name="search" size={20} color={colors.white} />*/}
              <Text style={{marginLeft: 5, color: colors.white}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={20} color={colors.white} />
              <Text style={{marginLeft: 5, color: colors.white}}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };




  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={place.image}>
        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              {/*<Icon name="search" size={22} color={colors.white} />*/}
              <Text style={{color: colors.white, marginLeft: 5}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={colors.white} />
              <Text style={{color: colors.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: colors.white, fontSize: 13}}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };



  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.topBack}>
          <Image source={require('../../img/Home_part/world_dott.png')} style={styles.map_dot} />
        </View>
        <View style={styles.topBar}>
          <Text style={styles.welcomeText}>Explore the beautiful places !</Text>
        </View>
        {/*<View style={styles.inputPlace}>
          <Icon name="airplane-landing" size={24} color="black"/>
          <TextInput style={styles.InputText}
            value={searchInput}
            placeholder="Place"
            onChangeText={text => setSearchInput(text)}
          />
        </View>
        */}
      </View>

      <View style={styles.textInputView}>
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <Icon name="magnify" size={30} color="black"/>
        </View>
        <TextInput style={styles.textInput}
          placeholder='Search'
        />
      </View>
      

      <View style={styles.secondPart}>
        <Text style={styles.sectionTitle}>Découvrez</Text>
        <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={w_screen - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
      </View>
      <View style={styles.safeZone}/>
    </ScrollView>
  )
}

export default PlanScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor: 'red'
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



  textInputView:{
    height: 60,
    width: '80%',
    borderColor: 'grey',
    //borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    top: -h_screen/22,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  textInput: {
    flex: 8,
    paddingLeft: 10,
  },


  secondPart:{
    top: -30
  },






  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: w_screen / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: w_screen - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },



  safeZone: {
    height: h_screen/15
  }
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