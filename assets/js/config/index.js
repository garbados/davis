var plugins = [
  require('./routes'),
  require('./location'),
  require('./disqus')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};