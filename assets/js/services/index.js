var plugins = [
  require('./posts'),
  require('./markdown'),
  require('./summary')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};