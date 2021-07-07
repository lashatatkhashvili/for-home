import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import './SplineChart.scss';

class SplineChart extends PureComponent {
  state = {
    chart: {
      type: 'spline',
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
        pointPlacement: 'on',
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
    colors: ['#025387', '#64A2E4', '#80C754', '#cecc6e'],
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

SplineChart.defaultProps = {
  title: null,
  showLegend: true,
  series: [],
  legendOnRight: false,
};

SplineChart.propTypes = {
  title: PropTypes.string,
  showLegend: PropTypes.bool,
  categories: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  legendOnRight: PropTypes.bool,
};

export default SplineChart;
