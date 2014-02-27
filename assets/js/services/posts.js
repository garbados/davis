module.exports = function (app) {
  app.factory('Posts', [
    '$http', 'url_root',
    function ($http, url_root) {
      function get (id) {
        var url = [url_root, 'docs', id].join('/');
        return $http({
          url: url,
          method: 'GET'
        });
      }

      var count = {
        categories: function () {
          var url = [url_root, '_view', 'categories'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        },
        tags: function () {
          var url = [url_root, '_view', 'tags'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        }
      };

      var search = {
        types: function (type) {
          var url = [url_root, '_view', 'types'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              key: JSON.stringify(type),
              reduce: false,
              include_docs: true
            }
          });
        },
        posts: function (query) {
          var url = [url_root, '_search', 'posts'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              q: query,
              include_docs: true
            }
          });
        },
        categories: function (category) {
          var url = [url_root, '_view', 'categories'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              key: JSON.stringify(category),
              reduce: false,
              include_docs: true
            }
          });
        },
        tags: function (tags) {
          if (tag.split) {
            // if tags is a string, make it an array
            tags = [tags];
          }
          var url = [url_root, '_search', 'posts'].join('/');
          var tag_query = tags.map(function (tag) {
            return 'tag:"' + tag + '"';
          }).join(' AND ');

          return $http({
            url: url,
            method: 'GET',
            params: {
              q: tag_query,
              include_docs: true
            }
          });
        }
      };

      return {
        get: get,
        count: count,
        search: search
      };
    }
  ]);
};