
import MapView from 'react-native-maps';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';


export const MapScreen = ({ navigation,route }) => {

    return (
        <View>
        <MapView style={styles.map}
          
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onRegionChange={this.onRegionChange}
          >
          <Button
            title="Select"
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'Home',
                params: { coordinates: [12.1 ,34.1] },
              });
            }}
          />
        
          </MapView>
          </View>
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
  