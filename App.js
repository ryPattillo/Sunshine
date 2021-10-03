
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import Api from './api/power.js';
import {MapScreen} from './src/Map.js';
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

  const [data, setData] = useState([]); // declare data and set to empty list

  // Need to get date,paramter names. Date picker and drop down lsit 
  var freq = "daily"
  var latitude = "47.6267"
  var longitude = "-122.2807"
  var parameter = "ALLSKY_SFC_SW_DWN"  // ALLSKY_SFC_LW_DWN
  var startDate = new Date("2021-01-01T23:45Z") // T and Z must be present
  var endDate =  new Date("2021-12-31T23:45Z") // T and Z must be present
  Api(setData,freq,latitude,longitude,parameter,startDate,endDate)
  console.log(data);
  if(!route.params?.coordinates){
    var coordinates = "No Location Selected"
  }else
    var coordinates = route.params?.coordinates

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
      title="API Call"
      onPress = {()=> {
        navigation.navigate("Map",{
        })}}
      />
    </View>
  )
}



// Will return the selected coordinates
