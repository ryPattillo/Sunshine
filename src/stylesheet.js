
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
    button1:{
      //position: "center",
      width: 60,
      height: 60,
      borderRadius: 60/2,
      alignItems:"center",
      justifyContent:"center",
      shadowRadius:10,
      shadowColor:"#007AFF",
      //shadowOpacity:0.3,
      //shadowOffset:{height:10}

    },
    buttonText:{
      color:'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      textAlign: 'center',
    },
    menu:{
      backgroundColor:"#007AFF"
    }

  
  });
  