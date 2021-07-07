import mixpanel from 'mixpanel-browser';

class MixPanelAnalytics {
  constructor() {
    this.API_KEY = process.env.REACT_APP_MIXPANEL_TOKEN;
    mixpanel.init(this.API_KEY);
  }

  logEvent(screenName, properties) {
    // const eventName = properties.name ? properties.name : screenName;

    if (properties) {
      mixpanel.track(screenName, properties);
    } else {
      mixpanel.track(screenName);
    }
  }

  setUser(user) {
    if (user) {
      if (user.id && user.id !== -1) {
        mixpanel.people.set({ $name: user.name, $email: user.email });
        mixpanel.identify(String(user.id));
      }
    }
  }

  setSuperProperty(property) {
    mixpanel.register(property);
  }

  reset() {
    mixpanel.reset();
  }
}

export default MixPanelAnalytics;
