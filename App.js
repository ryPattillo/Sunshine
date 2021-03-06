
import React,{useState} from 'react';
import { Text,View,ScrollView,Button} from 'react-native';
import { TextInput,List,Card,} from 'react-native-paper';
import useApiData from './api/power.js';
import {MapScreen} from './src/Map.js';
import {HomeButton,SunButton} from './src/buttons.js';
import {Graph} from './src/Visualization.js';
import MapView,{Marker} from 'react-native-maps';
import {styles} from './src/stylesheet.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';

export default function App() {

  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SUNSHINE" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const HomeScreen = ({navigation,route}) => {
  const defaultCoordinates = {"latitude":28.538129,"longitude":-81.381494}
  const [region,setRegion] = useState(defaultCoordinates)
  const [coordinates,setCoordinates] = useState(defaultCoordinates)
  const [data, setData] = useState({});// API return data
  const [startDate, setStartDate] = useState(new Date("2020-01-01T23:45Z")); // Initial Date
  const [endDate, setEndDate] = useState(new Date("2020-05-31T23:45Z")); // End Date
  const [parameter, setParameter] = useState("Choose Parameter"); // Parameters
  const [freq, setFreq] = useState("Choose Frequency"); // Frequency
  const [showStartPicker, setShowStartPicker] = useState(Platform.OS === 'ios');
  const [showEndPicker, setShowEndPicker] = useState(Platform.OS === 'ios');
  const [expandedParam, setExpandedParam] = useState(false);
  const [expandedFreq, setExpandedFreq] = useState(false);
  var names={"CLRSKY_SFC_SW_DWN":"Clear Sky Surface Shortwave Downward Irradiance","Choose Parameter":"Choose Parameter","ALLSKY_SFC_SW_DWN":"All Sky Surface Shortwave Downward Irradiance"}

  var latitude = coordinates["latitude"]
  var longitude = coordinates["longitude"]

  const handleParamPress = () => setExpandedParam(!expandedParam);
  const handleFreqPress = () => setExpandedFreq(!expandedFreq);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowStartPicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowEndPicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (

    <ScrollView>
      <View>
        
        <MapView style= {styles.map}
          onPress = {()=> {
            navigation.navigate({
              name: 'Map',
              params: {coordinates: [region["latitude"], region["longitude"]]},
            })}}
           initialRegion={{
              latitude: region["latitude"],
              longitude: region["longitude"],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
             }} 
            onRegionChangeComplete={region => setRegion(region) }>
            <Marker coordinate={{ latitude: region["latitude"], longitude: region["longitude"] }} />  
        </MapView>  
          
        <HomeButton 
            text="Select Location"
            onPress={() => {
             setCoordinates(region)
            }}
        />
      
      </View>

      <View>
        <Card.Title
          title={latitude.toFixed(6) +" , " +longitude.toFixed(6)}
          left={(props) => <TextInput.Icon name="map" />} 
        />
      </View>

   
      <View style={styles.inputContainer}>
        <View style ={{flex:0.5}}>
          <View>
            <Button onPress={() => {setShowStartPicker(true)}} title={"From: "+format(startDate, "dd/MM/yyyy")} />
          </View>
          {showStartPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startDate}
              display="default"
              mode='date'
              onChange={onStartDateChange}
            />
          )}
        </View>
        <View style ={{flex:0.5}}>
          <View>
            <Button onPress={() => {setShowEndPicker(true)}} title={"To: "+format(endDate, "dd/MM/yyyy")} />
          </View>
          {showEndPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={endDate}
              display="default"
              mode='date'
              onChange={onEndDateChange}
            />
           )}
        </View>
      </View>

      <View style={styles.dropDownContainer}>
        <List.Section title="Parameters:">
          <List.Accordion title={names[parameter]}
            expanded={expandedParam}
            left={props => <List.Icon {...props} icon="weather-sunny" />}
            onPress={handleParamPress}>
            <List.Item
            title={names["CLRSKY_SFC_SW_DWN"]}
            onPress = {() => {setParameter("CLRSKY_SFC_SW_DWN");
                              setExpandedParam(false)}} />
            <List.Item 
            title={names["ALLSKY_SFC_SW_DWN"]}
            onPress = {() => {setParameter("ALLSKY_SFC_SW_DWN");
                              setExpandedParam(false)}} />
          </List.Accordion>

          <List.Accordion
            title={freq}
            left={props => <List.Icon {...props} icon="calendar" />}
            expanded={expandedFreq}
            onPress={handleFreqPress}>
            <List.Item 
            title="daily"
            onPress = {() => {setExpandedFreq(false); setFreq("daily") }} />
            <List.Item 
            title="weekly"
            onPress = {() => {setExpandedFreq(false); setFreq("weekly") }} />
            <List.Item 
            title="monthly"
            onPress = {() => {setExpandedFreq(false); setFreq("monthly") }} />
          </List.Accordion>
        </List.Section>
      </View>

      <SunButton 
            text="Graph My Sunshine!"
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


// Will return the selected coordinates