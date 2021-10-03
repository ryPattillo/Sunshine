import { Chart, Line, Area, HorizontalAxis, VerticalAxis,Tooltip } from 'react-native-responsive-linechart'
import { StyleSheet, Text, View,ScrollView,Picker,Button, TouchableOpacity, Dimensions} from 'react-native';



import {styles} from './stylesheet.js';

import React from 'react';

export const Graph = (props) => {
    
    const first = parseInt(props.data[0]["x"]);
    const last = parseInt(props.data[props.data.length - 1]["x"])
  
    return(
      
      <ScrollView style = {styles.scroll} horizontal={true} >
        <Chart
          style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height/2
        }}
          data={[{x:1,y:1},{x:2,y:3}]}
          padding={{ left: 40, bottom: 40, right: 30, top: 20 }}
          xDomain={{ min: first, max: last}}
          yDomain={{ min: 0, max: 10}}
          xLabels ={[2,2]}
          onDataPointClick= {()=>{console.log("test")}}
          >
          <VerticalAxis tickCount={11} theme={{  labels: { formatter: (v) => v.toFixed(2) } }} />
          <HorizontalAxis tickCount={2} />
          <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
          <Line tooltipComponent={
          <Tooltip 
          label="test" 
          />} theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>
      </ScrollView>
        );
  
}


// Find graphing libary to display data

