import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

// TO GET GOOGLE API
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { api_google_key } from '../../../config';

const Search_Google_Places = () => {

  return (
      <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 12,
            },
          }}
          query={{
            key: api_google_key,
            language: "fr",
            types: '(cities)'
          }}
          textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        //  nearbyPlacesAPI="GooglePlacesSearch"
        //  debounce={200}
        />
  )
}

export default Search_Google_Places

const styles = StyleSheet.create({})