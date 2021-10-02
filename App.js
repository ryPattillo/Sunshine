import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import test from './api/power.js';
import axios from 'axios';
import ReactLoading from 'react-loading';
 

export default function App() {

  const [data,setData] = useState(0)

  test(setData)

  return (
    <View style={styles.container}>

      <Text> Welcome to the Sunshine App </Text>
         <TextInput
        placeholder="Input"
        keyboardType="numeric"
        />
        <Button
        title="test"/>
         <Button
        title="test"/>
         <Button
        title="test"/>
         <Button
        title="test"/>
    
      <Text>{data}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 5,
    height:10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
