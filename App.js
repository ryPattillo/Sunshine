
import React,{useState} from 'react';
import { View,ScrollView,Picker} from 'react-native';
import { TextInput,List,Card,} from 'react-native-paper';
import useApiData from './api/power.js';
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
  const [coordinates,setCoordinates] = useState({"latitude":51.5078788,"longitude":-0.0877321}) //Initial Coordinate data
  const [data, setData] = useState({});// API return data
  const [startDate, setStartDate] = useState(new Date("2020-01-01T23:45Z")); // Initial Date
  const [endDate, setEndDate] = useState(new Date("2020-05-31T23:45Z")); // End Date
  const [parameter, setParameter] = useState("None Selected"); // Parameters
  const [freq, setFreq] = useState("None Selected"); // Frequency

  if(route.params?.coordinates)
   setCoordinates({"latitude":route.params.coordinates[0],"longitude":route.params.coordinates[1]})


  var latitude = coordinates["latitude"]
  var longitude = coordinates["longitude"]

  return (

    <ScrollView>
      <View>
        <HomeButton
          text='Expand Map'
          onPress = {()=> {
            navigation.navigate({
              name: 'Map',
              params: { coordinates: [region["latitude"] ,region["longitude"] ]},
            })}}
        />
       {/* <MapView style= {styles.map}
           initialRegion={{
              latitude: 51.5078788,
              longitude: -0.0877321,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
             }} 
            onRegionChangeComplete={region => setRegion(region) }>
            <Marker coordinate={{ latitude: region["latitude"], longitude: region["longitude"] }} />  
        </MapView>  */}
          
        <HomeButton style={styles.button}
            text="Select Location"
            onPress={() => {
             setCoordinates(region)
            }}
        />
      
      </View>

      <View style = {styles.inputContainer}>
        <Card.Title
          title={latitude.toFixed(6) +" , " +longitude.toFixed(6)}
          left={(props) => <TextInput.Icon name="map" />} 
        />
      </View>

   
      <View style={styles.inputContainer}>
         <TextInput
            label="Start Date"
            placeholder={"yyyy-mm-dd"}
            left={<TextInput.Icon name="calendar" />}  
            onChangeText={setStartDate}
            value={startDate}
          />
        </View>
      
        <View style={styles.inputContainer}>
          <TextInput
          
            left={<TextInput.Icon name="calendar" 
              />}
            placeholder={"yyyy-mm-dd"}
            onChangeText={setEndDate}
            value={endDate}
          />
        </View>

        <View style={styles.dropDownContainer}>
          <List.AccordionGroup>
            <List.Accordion title={parameter} id="1">
              <List.Item 
              title="CLRSKY_SFC_SW_DWN"
              onPress = {() => {setParameter("CLRSKY_SFC_SW_DWN") }} />
              <List.Item 
              title="ALLSKY_SFC_SW_DWN"
              onPress = {() => {setParameter("ALLSKY_SFC_SW_DWN") }} />
            </List.Accordion>
          </List.AccordionGroup>
        </View>
   
    
         <View style={styles.dropDownContainer}>
          <List.AccordionGroup>
            <List.Accordion title={freq} id="1">
              <List.Item 
              title="daily"
              onPress = {() => {setFreq("daily") }} />
              <List.Item 
              title="weekly"
              onPress = {() => {setFreq("weekly") }} />
              <List.Item 
              title="monthly"
              onPress = {() => {setFreq("monthly") }} />
            </List.Accordion>
          </List.AccordionGroup>
      </View>

      <HomeButton style={styles.button}
            text="Generate Solar Data"
            onPress={() => {
            useApiData(setData,freq,coordinates["latitude"],coordinates["longitude"],parameter,startDate,endDate)
            }}
        />
   
      <GraphComponent value = {data} />

    </ScrollView>
  )
}

const GraphComponent = (props) => {
 
if(Object.keys(props.value).length > 0) {
  return (
    <Graph
      data = {props.value["data"]}
    /> )}
  else return null
}


const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (

      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 200}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Parameter 1" value="p1" />
        <Picker.Item label="Parameter 2" value="p2" />
        <Picker.Item label="Parameter 3" value="p3" />
        <Picker.Item label="Parameter 4" value="p4" />
      </Picker>

  );
}

// Will return the selected coordinates