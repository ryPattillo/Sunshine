
import {Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './stylesheet.js';

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