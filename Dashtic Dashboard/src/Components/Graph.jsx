import React from 'react';
import Chart from 'react-apexcharts';

const Graph = ({ title, data }) => {
    // Assuming data is in the following format:
    data = [{ name: 'Series 1', data: [1, 15, 6, 9, 2] }, { name: 'Series 2', data: [5, 9, 19, 1, 1] }];

    const options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false // Hide chart toolbar
            }
        },
        series: data,
        xaxis: {
            show: false, // Hide X-axis
        },
        yaxis: {
            show: false, // Hide Y-axis
        },
        stroke: {
            width: 3, // Set the width of series lines
        },
        legend: {
            show: false // Hide legend
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'], // Define colors for each series
        annotations: {
            points: [] // Remove any annotations
        },
        dataLabels: {
            enabled: false // Hide data labels
        }
    };

    return (
        <div>
            <Chart
                options={options}
                series={data}
                type="area"
                width="150"
                height="120"
            />
        </div>
    );
};

export default Graph;
