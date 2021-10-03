import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import React from 'react';

export const Graph = (props) => {
    
  // <VerticalAxis tickValues = {[]}/> , the array needs to be the dates
  // <HorizantalAxis tickValues = {[]}/>

    return(
      <Chart
      style={{ height: 300, width: 400 }}
      data={props.data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 202001, max: 202012 }}
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

