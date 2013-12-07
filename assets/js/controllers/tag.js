module.exports = function (app) {
  app.controller('TagCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      $scope.tag = $routeParams.tag;
      Posts
        .tags($routeParams.tag)
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