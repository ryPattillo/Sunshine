import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { StyleSheet, Text, View,ScrollView,TextInput,Button, TouchableOpacity, Dimensions} from 'react-native';

import React from 'react';

export const Graph = (props) => {
    
 
  return ( 
    <ScrollView
    horizontal = {true}>
    
    <Chart
    style={{ width: 300, height: 200, backgroundColor: '#eee' }}
    xDomain={{ min: 0, max: 10 }}
    yDomain={{ min: -2, max: 20 }}
    padding={{ left: 20, top: 5, bottom: 20, right: 0 }}
  >
    <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
    <HorizontalAxis tickValues={[1, 2,3, 4, 5, 6]} />
    <Line data={props.data} smoothing="none" theme={{ stroke: { color: 'red', width: 1 } }} />
    <Line data={props.data} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1 } }} />
  </Chart>
  </ScrollView>
  )  
 
  
  
}


// Find graphing libary to display data

