import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import './PieChart.scss';

class SplineChart extends PureComponent {
  state = {
    chart: {
      type: 'pie',
      spacingTop: 0,
      spacingLeft: 0,
      spacingBottom: 0,
      spacingRight: 0,
      style: {
        fontFamily: 'inherit',
      },
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      enabled: true,
    },
    colors: ['#E46D85', '#64A2E4', '#80C754', '#cecc6e'],
    series: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { title, showLegend, legendOnRight, series } = props;

    let legendOnRightOptions = {};
    if (legendOnRight) {
      legendOnRightOptions = {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        itemMarginBottom: 5,
        x: 0,
        y: 100,
      };
    }

    return {
      title: {
        text: title,
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
  series: PropTypes.array.isRequired,
  legendOnRight: PropTypes.bool,
};

export default SplineChart;
