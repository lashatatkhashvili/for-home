import React, { Component } from 'react';
import Analytics from '../../network/analytics/Analytics';

const withAnalytics = (WrapperComponent) => {
  return class WithAnalytics extends Component{

    logEvent = (name, params = {}) => {
      Analytics.logEvent(name, params);
    };

    render() {
      return <WrapperComponent {...this.props} logEvent={this.logEvent} />
    }

  }
};

export default withAnalytics;
