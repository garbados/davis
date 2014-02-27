module.exports = function (app) {
  app.controller('SearchCtrl', [
    '$scope', 'Posts', '$location',
    function ($scope, Posts, $location) {
      var query = $location.search().q;
      $scope.title = "Search: " + query;

      Posts
        .search
        .posts(query)
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

      $scope.limit = 5;
      $scope.next = function () {
        $scope.limit += 5;
      };
    }
  ]);
};