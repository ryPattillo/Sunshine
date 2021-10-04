
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, TextInput, Button, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './stylesheet.js';

// export function floatingButton({text, onPress}){

//   return(

//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>{text}</Text>
//       </View>
//       </TouchableOpacity>
//     // <TouchableOpacity onPress={onPress}>
//     //   <View style ={[styles.button1, styles.menu]}>
//     //       <Text name="plus" size={24} color="#FFF"></Text>
//     //     </View>
//     // </TouchableOpacity>

//   )

// }

export function BottomButton({text, onPress}){

  return(
      <View style={styles.bottomButton}>
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.bottomTextPadding, styles.footer]}>
      <Text style={styles.bottomText}>{text}</Text>
    </View>
    </TouchableOpacity>
    </View>
  )

}

export function HomeButton({text, onPress}){

    return(
      <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      </TouchableOpacity>
    )
  
}

export function SunButton({text, onPress}){

  return(
    <TouchableOpacity onPress={onPress}>
    <View style={styles.sunButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
    </TouchableOpacity>
  )

}