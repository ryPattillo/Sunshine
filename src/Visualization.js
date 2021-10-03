import { Chart, Line, Area, HorizontalAxis, VerticalAxis,Tooltip } from 'react-native-responsive-linechart'
import { StyleSheet, Text, View,ScrollView,Picker,Button, TouchableOpacity, Dimensions} from 'react-native';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";


import {styles} from './stylesheet.js';

import React from 'react';

export const Graph = (props) => {
    
    const first = parseInt(props.data[0]["x"]);
    const last = parseInt(props.data[props.data.length - 1]["x"])
    var datapoints = props.data.length
    var width = Dimensions.get('window').width
    width = (datapoints > 30) ? width + (width/30 * datapoints) : width;
    const screenWidth = width; 
  
    return(
      
      <ScrollView style = {styles.scroll} horizontal={true} >
        <Chart
          style={{width:screenWidth,height:Dimensions.get('window').height/2
        }}
          data={props.data}
          padding={{ left: 40, bottom: 40, right: 30, top: 20 }}
          xDomain={{ min: first, max: last}}
          yDomain={{ min: 0, max: 10}}
          xLabels ={[2,2]}
          onDataPointClick= {()=>{console.log("test")}}
          >
          <VerticalAxis tickCount={11} theme={{  labels: { formatter: (v) => v.toFixed(2) } }} />
          <HorizontalAxis tickCount={1} />
          <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
          <Line tooltipComponent={
            <CustomTooltip/>
          } theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>

      <View>
        
      </View>
      </ScrollView>

        );
  
}


const CustomTooltip = (props) => {

  if (typeof props.position!== 'undefined') {
    return (
      <TextSVG 
      x={props.position["x"]}
      y={props.position["y"]-10} 
      fill={"grey"} 
      fontSize="12" 
      fontWeight="bold"
      backgroundColor="blue" 
      >{props.value["meta"] + ":"+
       props.value["y"].toFixed(2) + "kW-hr/m^2/day"}</TextSVG>
    )
  } else {
    return null;
  }
}

// Find graphing libary to display data

