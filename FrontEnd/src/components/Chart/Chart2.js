import React, {useContext} from "react";
import ChartBar from "./ChartBar";
import { ChartContainer, ResultsContainer, ResultsTitle } from "../../styles/Results.styles";
import { SocketContext } from "../../context/SocketContext";

const Chart2 = (props) => {
    
    const dataPointValues2 = props.dataPoints2.map(dataPoint => dataPoint.value);
    const total = dataPointValues2.reduce((a, b) => a + b, 0);
    const totalMaximum2 = Math.max(...dataPointValues2);
    
    return(        
        <ResultsContainer>        
            <ResultsTitle>COMPLEXITY</ResultsTitle>
            <ChartContainer>
                {props.dataPoints2.map(dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum2}
                        sum={total}
                        label={dataPoint.label}
                    />
                )}
            </ChartContainer>
        </ResultsContainer>
    )
}

export default Chart2;