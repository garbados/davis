module.exports = function (app) {
  app.controller('CategoryCtrl', [
    '$scope', 'Posts', 'Paginator', '$routeParams', '$location',
    function ($scope, Posts, Paginator, $routeParams, $location) {
      $scope.title = ['@', $routeParams.category].join('');
      $scope.posts = $scope.posts || [];

      Paginator(function (done) {
        Posts
          .categories($routeParams.category)
          .success(done)
          .error(function (err) {
            if (err.status === 404) {
              $location.path('/404');
            } else {
              console.trace(err); 
            }
          });
      }, 5, function (pages) {
        $scope.hasMore = pages.hasMore;

        $scope.next = function (index) {
          $scope.posts = $scope.posts.concat.apply($scope.posts, pages.next(index));
        };

        pages.reset();
        $scope.next();
      });
    }
  ]);
};