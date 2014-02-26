module.exports = function (app) {
  app.config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/404', {
        templateUrl: 'notfound.html'
      })
      .when('/search', {
        controller: 'SearchCtrl',
        templateUrl: 'list.html'
      })
      .when('/tag/:tag/', {
        controller: 'TagCtrl',
        templateUrl: 'list.html'
      })
      .when('/:category', {
        controller: 'CategoryCtrl',
        templateUrl: 'list.html'
      })
      .when('/:category/:id', {
        controller: 'PostCtrl',
        templateUrl: 'post.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
    }
  ]);
};