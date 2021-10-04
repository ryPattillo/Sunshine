
import MapView,{Marker} from 'react-native-maps';
import React,{useState} from 'react';
import {View} from 'react-native';
import {styles} from './stylesheet.js';
import {BottomButton} from './buttons.js';

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
