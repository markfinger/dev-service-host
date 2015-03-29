var _ = require('lodash');

module.exports = {
  name: '__status',
  handler: function(data, done) {
    return done(null, JSON.stringify({
      isListening: !!this.host.listenerServer,
      services: Object.keys(this.host.services),
      config: this.host.config
    }));
  }
};