module.exports = function (app) {
  app.controller('NavCtrl', [
    '$scope', 'Posts', '$location',
    function ($scope, Posts, $location) {
      Posts
        .count
        .categories()
        .success(function (res) {
          var categories = res.rows.map(function (row) {
            return row.key;
          });
          $scope.categories = categories;
        });

      $scope.search = function (query) {
        $location.path('search').search({q: query});
      };
    }
  ]);
};