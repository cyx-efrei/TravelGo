import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

const w_screen = Dimensions.get('window').width;
const h_screen = Dimensions.get('window').height;


const AutocompleteList = () => {
    const [query, setQuery] = useState('');
    const [options, setOptions] = useState([]);

  
    const handleQueryChange = async (text) => {
      setQuery(text);
      if (text.length > 0) {
        try {
          const response = await fetch(`file:///Users/cyrilnakhla/Desktop/TravelGo/TravelGo/assets/src/list_cities.txt`);
          const text = await response.text();
          const options = text.split('\n');
          setOptions(options);
        } catch (error) {
          console.error(error);
        }
      } else {
        setOptions([]);
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput 
          value={query}
          onChangeText={handleQueryChange}
          placeholder="Type here to search"
          style={styles.input}
        />
        {/*<FlatList
          style={ styles.list }
          data={options.filter((option) =>
            option.toLowerCase().includes(query.toLowerCase())
          )}
          renderItem={({ item }) => <Text style={styles.text} onPress={console.log(item)}>{item}</Text>}
          
          keyExtractor={(item, index) => index.toString()}
        />*/}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 200,
    },
    input: {
      height: "100%",
      marginBottom: 10,
      width: w_screen/2.2,
      top: 5
    },
    list: {
      position: 'absolute',
      top: 50,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 0.3,
      borderColor: 'gray',
      width: w_screen/2.2,
      maxHeight: 200,
      opacity: 1,
    },
    text: {
      padding: 10,
      backgroundColor: "white"
    },
  });
  
  export default AutocompleteList;