class Intercom {
  static APP_ID = 'cj346p13';

  static loadIntercomScript = () => {
    if (window.Intercom) return;
    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/' + Intercom.APP_ID;
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();
  };

  static initialize = (userId, email, name) => {
    Intercom.USER_ID = userId;
    window.Intercom('boot', {
      app_id: Intercom.APP_ID,
      email: email,
      user_id: userId,
      name,
    });
  };

  static show = () => {
    window.Intercom('show');
  }

  static shutdown = () => {
    window.Intercom('shutdown');
  };

  static updateBuilding = (buildingId, buildingName, buildingQuantity) => {
    window.Intercom('update', {
      buildingId: buildingId,
      buildingName: buildingName,
      buildingQuantity: buildingQuantity,
    });
  };
}

export default Intercom;
