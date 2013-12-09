module.exports = function (app) {
  app.controller('SideBarCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      function getRelated (tags, done) {
        Posts
          .tags(tags)
          .success(function (res) {
            var results = {};

            res.rows
              .map(function (row) {
                return row.doc;
              })
              .forEach(function (doc) {
                if (Object.keys(results).indexOf(doc.category) === -1) {
                  results[doc.category] = {};
                }
                results[doc.category][doc._id] = doc;
              });

            done(results);
          })
          .error(function (err) {
            console.trace(err);
            throw err;
          });
      }

      Posts
        .categories($scope.post.category)
        .success(function (res) {
          var posts = res.rows
            .map(function (row) {
              return row.doc;
            });
          $scope.posts = posts;
        });

      if ($scope.post.tags && $scope.post.tags.length) {
        getRelated($scope.post.tags, function (categories) {
          $scope.categories = categories;
        });
      }
    }
  ]);
};