var plugins = [
  require('./routes'),
  require('./location'),
  require('./values')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};