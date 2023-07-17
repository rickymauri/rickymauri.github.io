import React from "react";
import ChartBar from "./ChartBar";
import { ChartContainer, ResultsContainer, ResultsTitle } from "../../styles/Results.styles";

const Chart3 = (props) => {
    
    const dataPointValues3 = props.dataPoints3.map(dataPoint => dataPoint.value);
    const total = dataPointValues3.reduce((a, b) => a + b, 0);
    const totalMaximum3 = Math.max(...dataPointValues3);
    
    return(
        <ResultsContainer>        
            <ResultsTitle>CLARITY</ResultsTitle>
            <ChartContainer>
                {props.dataPoints3.map(dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum3}
                        sum={total}
                        label={dataPoint.label}
                    />
                )}
            </ChartContainer>
        </ResultsContainer>
    )
}

export default Chart3;