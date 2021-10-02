
import MapView,{Marker} from 'react-native-maps';
import React,{useState} from 'react';
import {SyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import {styles} from './stylesheet.js';

export const MapScreen = ({ navigation,route }) => {

    [region,setRegion] = useState([])

    return (
        <View>
        <MapView style={styles.map}
          
          initialRegion={{
            latitude: 51.5078788,
            longitude: -0.0877321,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChangeComplete={region => setRegion(region)}
          />

          <Marker coordinate={{ 
            latitude: region["latitude"] ,longitude: region["longitude"] }
          }/>
          
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
      
          </View>
          )
    
        
    }
