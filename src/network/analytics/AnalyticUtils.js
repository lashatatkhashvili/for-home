import Analytics from './Analytics';

export const userNavigatingToScreen = buttonName => {
  Analytics.logEvent(`User navigated to ${buttonName}`);
};
