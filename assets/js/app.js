var app = angular.module('app', [
      'ngSanitize',
      'ngRoute',
      'ngDisqus'
    ]),
    plugins = [
      require('./services'),
      require('./controllers'),
      require('./config')
    ];

plugins
  .forEach(function (plugin) {
    plugin(app);
  });