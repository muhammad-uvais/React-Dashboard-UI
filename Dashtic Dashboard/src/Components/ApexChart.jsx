import React from 'react';
import Chart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Series 1',
        data: [30, 90, 45, 70, 50, 10, 35, 25]
      }],
      options: {
        chart: {
          type: 'area',
          stacked: true,
          height: 400,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
        },
        fill: {
          opacity: 0.5,
          colors: ['#979de4']
        },
        legend: {
          position: 'top',
        },
        grid: {
          show: false,
        },
        yaxis: {
            labels: {
                formatter: function(val){
                    return '$' + val
                }
            }
        },
        colors: ['#8a2be2'], // Purple color
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 5,
          colors: ['#7c87d5'], // Purple color
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="area" height={450} />
      </div>
    );
  }
}

export default ApexChart;
