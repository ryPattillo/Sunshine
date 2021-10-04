
import MapView,{Marker} from 'react-native-maps';
import React,{useState} from 'react';
import {SyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import {styles} from './stylesheet.js';
import { render } from 'react-dom';
import {BottomButton, HomeButton} from './buttons.js';

export const MapScreen = ({ navigation,route }) => {

const[region,setRegion] = useState([])



return (

    <View>

      <View styles={styles.contentContainer}>

        <MapView style= {styles.map2}
          
          initialRegion={{
            latitude: route.params.coordinates[0],
            longitude: route.params.coordinates[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChangeComplete={region => setRegion(region)} 
          >
          <Marker coordinate={{ "latitude": region["latitude"], "longitude": region["longitude"] }} />
          </MapView>
        <BottomButton
          text="Select Location"
          style="styles.button1"
          onPress={() => {
            // Pass and merge params back to home screen
            //alert("You pressed a button!")
            navigation.navigate({
              name: 'SUNSHINE',
              params: { coordinates: [region["latitude"] ,region["longitude"] ]},
            });
          }}
        />
      </View>
        
    </View>
)
    
}
