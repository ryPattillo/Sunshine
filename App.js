import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import test from './api/power.js';
import axios from 'axios';
import ReactLoading from 'react-loading';
import MapView from 'react-native-maps';






export default function App() {

  const [data,setData] = useState(3)

  test(setData)
  return (
      <View style={styles.container}>
        <MapView style={styles.map}
          
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChange={this.onRegionChange}
          >
            <Marker
  coordinate={{ latitude : initialRegion.latitude , longitude : initialRegion.longitude }}
/>
          </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});
