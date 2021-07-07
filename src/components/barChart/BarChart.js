import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import './BarChart.scss';

class BarChart extends PureComponent {
  state = {
    chart: {
      type: 'column',
      spacingLeft: 0,
      spacingBottom: 0,
      spacingRight: 1,
      style: {
        fontFamily: 'inherit',
        height: '100%',
      },
    },
    title: {
      text: null,
    },
    xAxis: {
      gridLineDashStyle: 'dash',
      gridLineWidth: 1,
      lineColor: '#ccc',
      tickmarkPlacement: 'on',
      categories: [],
      labels: {
        autoRotation: false,
      },
    },
    yAxis: {
      gridLineDashStyle: 'dash',
      lineColor: '#ccc',
      title: {
        text: null,
      },
      allowDecimals: false,
      lineWidth: 1,
    },
    plotOptions: {
      series: {
        // pointPlacement: 'on',
        marker: {
          symbol: 'circle',
          radius: 3,
        },
      },
    },
    tooltip: {
      shared: true,
    },
    legend: {
      enabled: true,
    },
    colors: ['#80C754', '#64A2E4', '#CE88CA', '#cecc6e', '#E46D85'],
    series: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { title, showLegend, legendOnRight, categories, series } = props;
    const { xAxis } = state;

    let legendOnRightOptions = {};
    if (legendOnRight) {
      legendOnRightOptions = {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100,
      };
    }

    return {
      title: {
        text: title,
      },
      xAxis: {
        ...xAxis,
        categories: categories,
      },
      legend: {
        enabled: showLegend,
        ...legendOnRightOptions,
      },
      series: series,
    };
  }

  render() {
    return <HighchartsReact highcharts={Highcharts} options={this.state} />;
  }
}

BarChart.defaultProps = {
  title: null,
  showLegend: true,
  series: [],
  legendOnRight: false,
};

BarChart.propTypes = {
  title: PropTypes.string,
  showLegend: PropTypes.bool,
  categories: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  legendOnRight: PropTypes.bool,
};

export default BarChart;
