
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
//import Api from './api/power.js';
import {MapScreen} from './src/Map.js';


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


const styles = StyleSheet.create({
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



const HomeScreen = ({navigation,route}) => {

  if(!route.params?.coordinates){
    coordinates = "No Location Selected"
  }else
    coordinates = route.params?.coordinates

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
