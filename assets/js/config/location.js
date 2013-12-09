module.exports = function (app) {
  app.config([
    '$locationProvider',
    function ($locationProvider) {
      $locationProvider
        .hashPrefix('!');
    }
  ]);
};