import React from "react";
import "../../css/ChartBar.css";

const ChartBar = (props) => {

    let barFillHeight = "0%";

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.sum) * 100) + "%";
    }

    return(
        <div className="chart-bar">
            <div className="chart-progress-bar">{barFillHeight}</div>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}>
                </div>
                <div className="char-bar__label">
                    <strong>{props.label}</strong>
                </div>
            </div>
        </div>
    )
}

export default ChartBar;