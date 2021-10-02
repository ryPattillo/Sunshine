import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Dimensions} from 'react-native';
import test from './api/power.js';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const [data,setData] = useState(3)

  test(setData)

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

  const [coordinates,setCoordinates] = useState([31.2,12.5])

  return (
    <View>
       <Text style={{ margin: 10 }}>Coordinates Selected: {route.params?.coordinates}</Text>
      <Button 
      title="Maps"
      onPress = {()=> {
        navigation.navigate("Map",{
        })}}
      />
    </View>
  )



}

const MapScreen = ({ navigation,route }) => {

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
            params: { coordinates: [12.1,34.1] },
          });
        }}
      />
    
      </MapView>
      </View>
      )

    
}