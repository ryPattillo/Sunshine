
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity, Dimensions} from 'react-native';
import Api from './api/power.js';
import {MapScreen} from './src/Map.js';
import HomeButton from './src/buttons.js';
import {Graph} from './src/Visualization.js';
import MapView,{Marker} from 'react-native-maps';

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

  const [input,setInput] = useState([{"freq":""},{"parameter":""},{"startDate":""},{"endDate":""}])
  const [region,setRegion] = useState([])
  const[graph,setGraph] = useState(0)


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
      <Text style={{ margin: 10 }}>Latitude: {latitude}</Text>
      <Text style={{ margin: 10 }}>Longitude: {longitude}</Text>
      <HomeButton
      text='Expand Map'
      onPress = {()=> {
        navigation.navigate({
          name: 'Map',
          params: { coordinates: [region["latitude"] ,region["longitude"] ]},
        })}}
      />
      <MapView style= {styles.map}
          
          initialRegion={{
            latitude: 51.5078788,
            longitude: -0.0877321,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChangeComplete={region => setRegion(region)}
          >
          <Marker coordinate={{ latitude: region["latitude"], longitude: region["longitude"] }} />
          

        
          </MapView>
          <HomeButton style={styles.button}
            text="Select"
            onPress={() => {
              // Pass and merge params back to home screen
              //alert("You pressed a button!")
              navigation.navigate({
                name: 'Home',
                params: { coordinates: [region["latitude"] ,region["longitude"] ]},
              });
            }}
          />

          
      <Button 
      title="Generate Chart"
      onPress = {(graph)=> {
        setGraph(1)
        }}
      />

      <GraphComponent value = {graph} />

    </View>
  )
}

const GraphComponent = (props) => {

if(props.value == 1) {
return (
<Graph
data = {[
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
]}
/> )}
else return null

}

// Will return the selected coordinates