import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import main from './api/power.js';
import axios from 'axios';
//import Geolocation from 'react-native-geolocation-service';



export default function App() {

  const [data,setData] = useState(0)

  test(setData)

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function test(setData) {

  axios.get(
    "https://power.larc.nasa.gov/api/temporal/hourly/point?start=20210820&end=20210920&latitude=32.123&longitude=90.1243&community=ag&parameters=CLRSKY_SFC_SW_DWN&user=ryan&header=true&time-standard=lst"
  )
  .then(function (response) {
    // handle success
    console.log(response["data"]["properties"]["parameter"]["CLRSKY_SFC_SW_DWN"]["2021090410"])
      setData(response["data"]["properties"]["parameter"]["CLRSKY_SFC_SW_DWN"]["2021090410"])
      //response["data"]["properties"]
  })
  .catch(function (error) {
      // handle error
      console.log(error);
  })

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
