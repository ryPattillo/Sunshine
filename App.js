
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,Button, TouchableOpacity, Dimensions} from 'react-native';
import Api from './api/power.js';
import {MapScreen} from './src/Map.js';
import {HomeButton} from './src/buttons.js';
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

  const [region,setRegion] = useState([])
  const [graph,setGraph] = useState(0)
  const [coordinates,setCoordinates] = useState({"latitude":51.5078788,"longitude":-0.0877321})

  var freq = "Hourly"
  var parameter = "CLRSKY_SFC_SW_DWN"
  var startDate = "20200810"
  var endDate = "20210810"

  var latitude = coordinates["latitude"]
  var longitude = coordinates["longitude"]

  return (
    <ScrollView>
   
      <HomeButton
      text='Expand Map'
      onPress = {()=> {
        navigation.navigate({
          name: 'Map',
          params: { coordinates: [region["latitude"] ,region["longitude"] ]},
        })}}
      />

      <MapView style= {styles.map}
        //customMapStyle={mapDarkStyle}
        initialRegion={{
          latitude: 51.5078788,
          longitude: -0.0877321,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} 

        onRegionChangeComplete={region => setRegion(region) }>

        <Marker coordinate={{ latitude: region["latitude"], longitude: region["longitude"] }} />
          
        </MapView>
          
        <HomeButton style={styles.button}
            text="Select Location"
            onPress={() => {
             setCoordinates(region)
            }}
          />
      <Text style={{ textAlign: 'center', margin: 10 }}>Latitude: {latitude.toFixed(4)} Longitude: {longitude.toFixed(4)}</Text>

      <Button 
      title="Generate Chart"
      onPress = {(graph)=> {
        
        setGraph(1)
      
        }}
      />
      <GraphComponent value = {graph} />

    </ScrollView>
  )
}

const GraphComponent = (props) => {
 

if(props.value == 1) {
return (
<Graph
data = {[
  {x: 1, y: 13},
  {x: 2, y: 16},
  {x: 3, y: 14},
  {x: 4 ,y: 19},
]}
/> )}
else return null

}

// Will return the selected coordinates