module.exports = function (app) {
  app.controller('CategoryCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      $scope.category = $routeParams.category;
      Posts
        .categories($routeParams.category)
        .success(function (posts) {
          $scope.posts = posts;
        })
        .error(function (err) {
          if (err.status === 404) {
            $location.path('/404');
          } else {
            console.trace(err); 
          }
        });
    }
  ]);
};