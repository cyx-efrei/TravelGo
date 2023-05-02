import { StyleSheet, Text, View, Alert, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';

import * as colors from '../../../src/color.js'

// API GOOGLE FOR AUTO COMPLETION
import Search_Google_Places from '../Google_api_Components/Search_Google_Places.js';
import AutocompleteList from '../Autocomplete/AutocompleteList.js';

import { RequestTravel } from '../../../../requests/RequestTravel.js';

import { AuthContext } from '../../../../context/AuthContext.js';

// TO GET THE SIZE OF EACH PHONE
const w_screen = Dimensions.get('window').width;
const h_screen = Dimensions.get('window').height;

// FOR ICONS
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Destination = ({navigation, addHistory}) => {

  const { setIsLoading } = useContext(AuthContext);

  // DEFINE INPUT VARIABLES
  const [Landing, setLanding] = React.useState('');
  const [TakeOff, setTakeOff] = React.useState('');
  const [numberDays, setNumberDays] = React.useState('');
  const [showBudget, setShowBudget] = React.useState(false);
  const [children, setChildren] = React.useState(false);

  function handleOnPressBudget(){
    setShowBudget(!showBudget);
  }

  function handleOnPressIncludeMinor(){
    setChildren(!children);
  }

  function changeDestinationField(){
    const temp = Landing;
    setLanding(TakeOff);
    setTakeOff(temp);
    console.log(TakeOff, temp)
  }

  function setNumberDaysFunction(number){
    if (number >15){
      setNumberDays("15")
    }
    else{
      setNumberDays(number)
    }
  }



  const handle2Weeks = () => {
    setNumberDays("15");
  }



  // création du fichier json
  let data={}

  function fill_data(){
    if (Landing.length < 3 || TakeOff.lenght < 3){
      Alert.alert(
        'Ooops',
        'Veuillez entrer un nom de ville correct ..',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK pressed')
          }
        ],
        { cancelable: false }
      );
    } else if (numberDays <= 0){
      Alert.alert(
        'Ooops',
        'Vous voulez voyager moins d\'1 jour ?',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK pressed')
          }
        ],
        { cancelable: false }
      );
    }else {
      data.arrivee = Landing,
      data.depart = TakeOff,
      data.numberDays = numberDays,
      data.numberDays = numberDays,
      data.showBudget = showBudget,
      data.children = children,
      console.log(data)
      addHistory(data)
      RequestTravel({ data, setIsLoading, navigation })
        .then(response => {
          console.log(response);
          // Handle the response data here
        })
        .catch(error => {
          console.log(error);
          // Handle the error here
        });
    }
  }


  return (
    <View style={styles.MainContainer}>
      {/*Landing part*/}
      <View style={styles.SearchCity}>
        <View style={styles.inputPlace}>
          <Icon name="airplane-landing" size={24} color="black"/>
          <TextInput style={styles.InputText}
            value={Landing}
            placeholder="Landing place"
            onChangeText={text => setLanding(text)}
          />
          {/*<AutocompleteList/>*/}
          {/*<Search_Google_Places/>*/}
        </View>

        {/*SEPARATOR*/}
        <View>
          <View style={styles.separator}/>
          <TouchableOpacity
            onPress={changeDestinationField}>
            <View style={styles.swapButton}>
              {/*<Icon name="swap-vertical-variant" size={23} color="white"/>*/}
              <Text style={styles.OptionText}>SWAPE</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputPlace}>
          <Icon name="airplane-takeoff" size={23} color="black"/>
          <TextInput style={styles.InputText}
            value={TakeOff}
            placeholder="Leaving place"
            onChangeText={text => setTakeOff(text)}
          />
        </View>
      </View>
      
      {/*Number of days part*/}
      <View style={styles.NumberOfDates}>
        <View style={styles.inputPlace}>
          <Icon name="calendar-month-outline" size={24} color="black"/>
          <TextInput style={styles.InputText}
            placeholder="Number of days"
            value={numberDays}
            onChangeText={Number => setNumberDaysFunction(Number)}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={handle2Weeks}>
            <Text style={styles.OptionText}> 2 WEEKS </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*Budget*/}
      <View style={styles.PartDivided}>
        <TouchableOpacity style={
          showBudget === true ? [styles.checkPlace, styles.choiceLeft, styles.ActiveButton] : [styles.checkPlace, styles.choiceLeft]}
          onPress={handleOnPressBudget}
          activeOpacity={0}
          >

          <Icon name="cash-check" size={24} color="black"/>
          <Text style={styles.textChoose}>Show Budget</Text>
        </TouchableOpacity>

        <TouchableOpacity style={
          children === true ? [styles.checkPlace, styles.choiceRight, styles.ActiveButton] : [styles.checkPlace, styles.choiceRight]}
          onPress={handleOnPressIncludeMinor}
          activeOpacity={0}
          >
          <Icon name="teddy-bear" size={24} color="black"/>
          <Text style={styles.textChoose}> Include Minor</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonSearch}
        onPress={fill_data}>
          <Icon name="magnify-plus-outline" size={22} color="white"/>
          <Text style={styles.textSearch}>SEARCH</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Destination

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },
  SearchCity:{
    // backgroundColor: 'red',
    borderWidth: 0.5,
    borderRadius: 10,
    height: h_screen/7,
    margin: 15,
    borderColor: colors.grey,
  },
  directionColumn: {
    position: 'relative',
    left: 25
  },
  inputPlace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: "row",
    marginLeft: 20,
  },
  InputText: {
    width: '60%',
    marginBottom: 0,
    marginLeft: 10,
  },
  NumberOfDates: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: h_screen/13,
    marginHorizontal: 15,
    marginBottom: 15,
    borderColor: colors.grey,
  },
  OptionText: {
    color: colors.primary,
    fontSize: w_screen/30
  },
  PartDivided: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: h_screen/13,
    marginHorizontal: 15,
    marginBottom: 15,
    borderColor: colors.grey,
    flexDirection: "row"
  },
  checkPlace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: "row",
    paddingLeft: 20,
  },
  choiceLeft: {
    borderRightWidth: 0.4,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  ActiveButton:{
    backgroundColor: colors.primary,
  },
  choiceRight: {
    paddingRight: 8,
    borderRightWidth: 0.4,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  textChoose: {
    borderColor: colors.grey,
    marginLeft: 5,
  },

  //FOR THE SEPARATOR
  separator: {
    backgroundColor: colors.black,
    height: 0.5,
    marginHorizontal: 10,
    opacity: 0.4,
    width: w_screen/1.8,
  },
  swapButton:{
    position: 'absolute',
    width: h_screen/15,
    right: w_screen/25,
    top: -h_screen/25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //SEARCH
  buttonSearch: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    marginHorizontal: 15,
    height: h_screen/15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: h_screen/130,
  },
  textSearch: {
    color: colors.white,
    fontSize: w_screen/25,
    marginLeft: 5
  }
})