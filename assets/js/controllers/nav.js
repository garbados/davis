module.exports = function (app) {
  app.controller('NavCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      Posts
        .categories()
        .success(function (res) {
          var categories = res.rows.map(function (row) {
            return row.key;
          });
          $scope.categories = categories;
        });
    }
  ]);
};