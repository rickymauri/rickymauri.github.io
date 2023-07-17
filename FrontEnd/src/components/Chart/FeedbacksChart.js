import React, {useContext, useEffect, useState} from "react";
import { SocketContext } from "../../context/SocketContext";
import {ResultsList} from "../../styles/Results.styles";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";

const FeedbacksChart = () => {

    const {feedbacksList} = useContext(SocketContext);

    const chartDataPoints1 = [
        { label: "1", value: 0 },
        { label: "2", value: 0 },
        { label: "3", value: 0 },
    ];

    const chartDataPoints2 = [
        { label: "1", value: 0 },
        { label: "2", value: 0 },
        { label: "3", value: 0 },
    ];

    const chartDataPoints3 = [
        { label: "1", value: 0 },
        { label: "2", value: 0 },
        { label: "3", value: 0 },
    ];

    if(feedbacksList) {
        chartDataPoints1[0].value = feedbacksList.understandingValue[0];
        chartDataPoints1[1].value = feedbacksList.understandingValue[1];
        chartDataPoints1[2].value = feedbacksList.understandingValue[2];

        chartDataPoints2[0].value = feedbacksList.complexityValue[0];
        chartDataPoints2[1].value = feedbacksList.complexityValue[1];
        chartDataPoints2[2].value = feedbacksList.complexityValue[2];

        chartDataPoints3[0].value = feedbacksList.explainationValue[0];
        chartDataPoints3[1].value = feedbacksList.explainationValue[1];
        chartDataPoints3[2].value = feedbacksList.explainationValue[2];
    }

    return(
        <ResultsList>
            <Chart1 dataPoints1={chartDataPoints1} />
            <Chart2 dataPoints2={chartDataPoints2} />
            <Chart3 dataPoints3={chartDataPoints3} />
        </ResultsList>

    )
}

export default FeedbacksChart;