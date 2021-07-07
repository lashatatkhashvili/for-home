import MixPanelAnalytics from './MixPanelAnalytics';

class Analytics {
  constructor() {
    this.tools = this.setupAnalytics();
  }

  setupAnalytics() {
    return [new MixPanelAnalytics()];
  }

  logEvent(name, params = {}) {
    this._loop(x => {
      if (typeof x.logEvent === 'function') {
        x.logEvent(name, Object.assign({}, params));
      }
    });
  }

  setUser(user) {
    this._loop(x => {
      if (typeof x.setUser === 'function') {
        x.setUser(user);
      }
    });
  }

  setSuperProperty(params = {}) {
    this._loop(x => {
      if (typeof x.setSuperProperty === 'function') {
        x.setSuperProperty(Object.assign({}, params));
      }
    });
  }

  reset() {
    this._loop(x => {
      if (typeof x.reset === 'function') {
        x.reset();
      }
    });
  }

  _loop(callback) {
    this.tools.map(callback);
  }
}

export default new Analytics();
