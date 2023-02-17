import { StyleSheet, Text, View, ScrollView, PixelRatio, TextInput, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react'

import { getFontSize } from '../../config'

const PlanScreen = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* <View style={styles.TitleContainer}>
          <Text style={styles.TitleScreen}>Plan</Text>
        </View> */}
        <View stye={styles.topBar}>
          <Text style={styles.introScreen}>Plan your trip easily with TravelGo</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputText}>
            <MaterialCommunityIcons name="magnify" color={'#c0c3c4'} size={PixelRatio.getPixelSizeForLayoutSize(10)} />
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search"
              placeholderTextColor="#ccc"
              value={searchInput}
              onChangeText={text => setSearchInput(text)}
              />
          </View>
          <TouchableOpacity 
            style={styles.filterBack}
            activeOpacity={0.6}>
            <MaterialCommunityIcons name="tune" color={'white'} size={PixelRatio.getPixelSizeForLayoutSize(10)} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default PlanScreen

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    // borderWidth: 1,
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  introScreen: {
    fontSize: getFontSize(17),
    color: '#37393A',
  },
  inputText: {
    position: 'relative',
    width: '85%',
    height: PixelRatio.getPixelSizeForLayoutSize(18),
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
  filterBack: {
    backgroundColor: '#08C5D1',
    borderRadius: 20,
    padding: 7,
  }
})