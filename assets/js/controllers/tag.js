module.exports = function (app) {
  app.controller('TagCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      $scope.title = ['#', $routeParams.tag].join('');
      
      Posts
        .tags($routeParams.tag)
        .success(function (res) {
          $scope.posts = res.rows.map(function (row) {
            return row.doc;
          });
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