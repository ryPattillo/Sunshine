
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import {StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 5,
      height:50,
      color: '#0011',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/4,
    },
    map2:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height-170,
    },
    button:{
      //borderRadius:2,
      paddingVertical:14,
      backgroundColor:'#007AFF',
    },
    bottomButton:{
      borderRadius:8,
      paddingVertical:14,
      backgroundColor:'#007AFF',
    },
    sunButton:{
      //borderRadius:2,
      paddingVertical:14,
      backgroundColor:"#FFC628",
    },
    button1:{
  
      width: 60,
      height: 60,
      borderRadius: 60/2,
      alignItems:"center",
      justifyContent:"center",
      shadowRadius:10,
      shadowColor:"#007AFF",
      
    },
    bottomText:{
      color:'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
      textAlign: 'center',
    },
    bottomTextPadding:{
      paddingVertical:3,
    },
    inputContainer: 
      {
        flexDirection:'row',
        flex:1,
        borderColor:"#007AFF",
        
        height:Dimensions.get('window').height/11,
        width:Dimensions.get('window').width,
        paddingTop: 10,
        paddingLeft:30,
      
      },
      footer:{
        height: 100,
      },

      dropDownContainer: 
      {
      
        width:Dimensions.get('window').width,
        padding: 5
      },

      locationContainer: 
      {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/11,
        padding: 5
      },
    


    scroll: {
      height: Dimensions.get('window').height,

    },
    graph:{

      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3,
    },
    graphView:{
    
      marginBottom: 500,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2
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
    },

    dateText:{
      backgroundColor:"#007AFF",
      height:43,
      color:'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      textAlign: 'center',
      
      
    }

  
  });
  