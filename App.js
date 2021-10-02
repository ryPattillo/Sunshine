
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
//import Api from './api/power.js';
import {MapScreen} from './src/Map.js';
import {Graph} from './src/Visualization.js';

import {styles} from './src/stylesheet.js';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();


    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
 
    
}
const HomeScreen = ({navigation,route}) => {

  // Need to get date,paramter names. Date picker and drop down lsit 
  // Need to choose start date and end date
  // need choose parameter

  [input,setInput] = useState([{"freq":""},{"parameter":""},{"startDate":""},{"endDate":""}])

  freq = "Hourly"
  parameter = "CLRSKY_SFC_SW_DWN"
  startDate = "20200810"
  endDate = "20210810"

  if(!route.params?.coordinates){
    coordinates = "No Location Selected"
  }else

    coordinates = route.params?.coordinates
    latitude = coordinates[0]
    longitude = coordinates[1]
    console.log(coordinates)

  return (
    <View>
      <Text style={{ margin: 10 }}>Coordinates Selected: {coordinates}</Text>
      <Button 
      title="Select Location"
      onPress = {()=> {
        navigation.navigate("Map",{
        })}}
      />
      <Button 
      title="Generate Chart"
      onPress = {()=> {
        navigation.navigate("Map",{
        })}}
      />
      <Graph
      data = {[
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000},
      ]}
      />
      <Text> SUNSHINE !!! </Text>
    </View>
  )
}



// Will return the selected coordinates
