import React from "react";

import './Chart.css';
import ChartBar from "./ChartBar";


const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValue);

    return (
        <div className="chart">

            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={totalMaxValue}
                    label={dataPoints.label}
                />

            )
            )}

        </div>
    );

};
export default Chart;