import React from 'react'
import Chart from "react-google-charts";
import { useSelector } from 'react-redux';

function ChartDisplay() {
    const data = useSelector(state => state.data);
    console.log(data)
    return (
        <div className="chart-container">
            < Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    hAxis: {
                        title: 'Input',
                    },
                    vAxis: {
                        title: 'Execution Time (ms)',
                    },

                }}
                rootProps={{ 'data-testid': '1' }}
                animation={{ duration: 20 }}
            />
        </div>
    )
}

export default ChartDisplay
