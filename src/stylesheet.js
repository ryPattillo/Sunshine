
import {StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 5,
      height:5,
      color: '#0011',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3,
    },
    map2:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    button:{
      borderRadius:8,
      paddingVertical:14,
      backgroundColor:'#007AFF',
    },
    buttonText:{
      textAlign: 'center',
    }

  
  });
  