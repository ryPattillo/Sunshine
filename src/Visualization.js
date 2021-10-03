import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { StyleSheet, Text, View,ScrollView,TextInput,Button, TouchableOpacity, Dimensions} from 'react-native';

import React from 'react';

export const Graph = (props) => {
    
  // <VerticalAxis tickValues = {[]}/> , the array needs to be the dates
  // <HorizantalAxis tickValues = {[]}/>
    const first = parseInt(props.data[0]["x"]);
    const last = parseInt(props.data[props.data.length - 1]["x"])
    return(
      <Chart
      style={{ height: 300, width: 400 }}
      data={props.data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: first, max: last}}
      yDomain={{ min: 0, max: 10}}
    >
      <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
      <HorizontalAxis tickCount={5} />
      <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
      <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
    </Chart>
        );
  
}


// Find graphing libary to display data

