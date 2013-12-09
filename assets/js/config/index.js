var plugins = [
  require('./routes'),
  require('./location'),
  require('./disqus'),
  require('./url'),
  require('./category')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};