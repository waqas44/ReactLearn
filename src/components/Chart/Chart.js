import React from "react";

import './Chart.css';
import ChartBar from "./ChartBar";

import './ChartBar.css';
const Chart = (props) => {


    return (
        <div className="chart">

            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={null}
                    label={dataPoints.label}
                />

            )
            )}

        </div>
    );

};
export default Chart;