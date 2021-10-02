import { VictoryArea,VictoryBar,VictoryChart} from "victory-native";
import React from 'react';


export const Graph = (props) => {
    
    return(
        <VictoryChart>
        <VictoryBar
          style={{
            data: { strokeWidth: 3, fillOpacity: 0.4 }
          }}
        >
          <VictoryArea
            style={{
              data: { fill: "cyan", stroke: "cyan" }
            }}
            data={
                props.data
            }
                
          />
         
        </VictoryBar>
      </VictoryChart>
        );
  
}


// Find graphing libary to display data

