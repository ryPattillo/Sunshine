
import {StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 5,
      height:10,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
  });
  