import React from 'react'
import Chart from "react-google-charts";

function ChartDisplay() {
    return (
        <div className="chart-container">
            < Chart
                width={'100%'}
                height={'100%'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={
                    [
                        ['Input', 'Time'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                // data={data}
                options={{
                    hAxis: {
                        title: 'Input',
                    },
                    vAxis: {
                        title: 'Execution Time',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default ChartDisplay
