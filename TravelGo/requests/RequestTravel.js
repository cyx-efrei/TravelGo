import { Alert } from 'react-native';

const url = "http://localhost:3000"

export function RequestTravel({data, setIsLoading, navigation}) {

    setIsLoading(true);
  
    console.log(data);
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      return data;
    })
    .catch(error => {
      console.log("ok")
      setIsLoading(false);
    
      Alert.alert(
        'Ooops',
        'Nous rencontrons actuellement des problèmes ..',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK pressed')
          }
        ],
        { cancelable: false }
      );

      return error;
    });
  }
  