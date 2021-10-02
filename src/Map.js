
import MapView,{Marker} from 'react-native-maps';
import React,{useState} from 'react';
import {SyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import {styles} from './stylesheet.js';
import { render } from 'react-dom';

export const MapScreen = ({ navigation,route }) => {

    [region,setRegion] = useState([])

    function place(region){
      console.log(region);
      
    }

    return (
        <MapView style= {styles.map2}
          
          initialRegion={{
            latitude: route.params.coordinate[0],
            longitude: route.params.coordinate[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChangeComplete={region => setRegion(region)}
          onPress ={ mark => {
            console.log(region)
             (place(region))
          }}  
          >
          <Marker coordinate={{ latitude: region["latitude"], longitude: region["longitude"] }} />
          <Button
            title="Select"
            onPress={() => {
              // Pass and merge params back to home screen
              console.log(region)
              navigation.navigate({
                name: 'Home',
                params: { coordinates: [region["latitude"] ,region["longitude"] ]},
              });
            }}
          />
        
          </MapView>
          )
    
        
    }
