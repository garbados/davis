module.exports = function (app) {
  app.controller('SideBarCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      function getRelated (post, done) {
        var query = 'tags:(' + post.tags.join(' OR ') + ') AND category:' + JSON.stringify(post.category);

        Posts
          .search
          .posts(query)
          .success(function (res) {
            var results = res.rows.map(function (row) {
              return row.doc;
            });

            done(results);
          })
          .error(function (err) {
            console.trace(err);
            throw err;
          });
      }

      function getRecent(category, done) {
        Posts
          .search
          .categories(category)
          .success(function (res) {
            done(res.rows.map(function (row) {
              return row.doc;
            }));
          });
      }

      $scope.$watch('post', function (post) {
        if (post) {
          getRecent(post.category, function (docs) {
            $scope.recent = docs;
          });
          getRelated(post, function (docs) {
            $scope.related = docs;
          });
        }
      });
    }
  ]);
};