module.exports = function (app) {
  app.controller('PostCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      Posts
        .get($routeParams.id)
        .success(function (post) {
          $scope.post = post;
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