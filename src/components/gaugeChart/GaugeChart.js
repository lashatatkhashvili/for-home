import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import solidgauge from 'highcharts/modules/solid-gauge';

HC_more(Highcharts);
solidgauge(Highcharts);

const GaugeChart = props => {
  console.log('style', props.style);
  let gaugeOptions = {
    chart: {
      type: 'solidgauge',
      width: props.width ? props.width : 64,
      height: props.height ? props.height : 64,
      margin: 0,
    },
    title: null,
    tooltip: {
      enabled: false,
    },
    pane: {
      center: ['50%', '50%'],
      size: '95%',
      startAngle: 0,
      endAngle: 360,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '95%',
        outerRadius: '100%',
        borderWidth: 0,
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      labels: {
        enabled: false,
      },
      lineWidth: 0,
      minorTickInterval: null,
      tickPixelInterval: 400,
      tickWidth: 0,
    },
    plotOptions: {
      solidgauge: {
        color: '#BCE2C9',
        innerRadius: '85%',
      },
    },
    series: [
      {
        data: [
          {
            color: '#BCE2C9',
            radius: '105%',
            innerRadius: '90%',
            y: props.percentage,
            dataLabels: {
              y: -15,
              format: '{y}%',
              borderWidth: 0,
              style: {
                fontSize: props.fontSize ? props.fontSize : '15px',
              },
            },
          },
        ],
      },
    ],
  };
  return (
    <HighchartsReact
      containerProps={{
        style: {
          height: props.height ? props.height : 64,
          width: props.width ? props.width : 64,
        },
      }}
      style={{
        height: props.height ? props.height : 64,
        width: props.width ? props.width : 64,
        ...props.style,
      }}
      highcharts={Highcharts}
      options={gaugeOptions}
    />
  );
};

export default GaugeChart;
