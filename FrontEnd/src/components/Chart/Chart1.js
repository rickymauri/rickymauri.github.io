import React, {useContext} from "react";
import ChartBar from "./ChartBar";
import {ChartContainer} from "../../styles/Results.styles";
import {ResultsContainer} from "../../styles/Results.styles";
import { SocketContext } from "../../context/SocketContext";
import {ResultsTitle} from "../../styles/Results.styles";

const Chart1 = (props) => {
    
    const dataPointValues1 = props.dataPoints1.map(dataPoint => dataPoint.value);
    const total = dataPointValues1.reduce((a, b) => a + b, 0);
    const totalMaximum1 = Math.max(...dataPointValues1);  
    
    return(        
        <ResultsContainer>        
            <ResultsTitle>UNDERSTANDING</ResultsTitle>
            <ChartContainer>
                {props.dataPoints1.map(dataPoint => 
                    <ChartBar
                        key={dataPoint.label} 
                        value={dataPoint.value} 
                        sum={total}
                        maxValue={totalMaximum1}
                        label={dataPoint.label}
                    />
                )}
            </ChartContainer>
        </ResultsContainer>
    )
}

export default Chart1;
