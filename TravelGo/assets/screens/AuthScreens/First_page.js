import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { StyleSheet, Text, View, Image, TouchableOpacity, PixelRatio } from 'react-native'
import { getFontSize } from '../../config';

// Taille par défault de la police des textes

export default function First_page({navigation}) {

  const {firstLog} = useContext(AuthContext)

  

  return (
    
    <View style={styles.main_container}>

        {/*           BACKGROUND PART IMAGE           */}

        <Image 
        source={require('../../img/Auth_part/firstLandscape.jpeg')}
        style={styles.imageBackground}
        />

        {/*           TOP PART TITLES           */}

      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.whiteTitle}>Explore.</Text>
          <Text style={styles.blackTitle}>Travel.</Text>
          <Text style={styles.blackTitle}>Learn.</Text>
        </View>
        
        {/*           BOTOTM PART BUTTON + TEXT           */}

        <View style={styles.bottomContainer}>
            <Text style={styles.introTexte}>Préparez rapidement et facilement vos prochains voyages avec TravelGo !</Text>
            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.6}
            onPress={() => {firstLog()}}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    opacity: 0.8,
  },
  secondContainer: {
    position: 'absolute',
    marginTop: 55,
    marginHorizontal: 30,
    height: '90%',
    width: '85%',
    justifyContent: 'space-between'
  },
  whiteTitle: {
    fontSize: 60,
    fontWeight: '600',
    color: 'white',
  },
  blackTitle: {
    fontSize: 60,
    fontWeight: '600',
    marginTop: -5,
    color: 'black',
  },
  bottomContainer: {
    width: '100%',
    height: '23%',
    backgroundColor: 'rgba(230, 227, 228, 0.6)',
    bottom: 15,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomText: {
    width: 20,
    backgroundColor: 'red'
  },
  introTexte: {
    top: '8%',
    fontSize: getFontSize(18),
    fontWeight: '400',
    flex: 1.3,
  },
  button: {
    height: '45%',
    backgroundColor: '#08C5D1',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  }
})