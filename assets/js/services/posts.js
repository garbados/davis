module.exports = function (app) {
  app.factory('Posts', [
    '$http',
    function ($http) {
      var url_root = 'http://localhost:5984/test_porter/_design/davis';

      function _call (url, key) {
        url = [url_root, url].join('/');
        if (key) {
          if (typeof(key) === 'object') {
            return $http({
              url: url,
              method: 'GET',
              params: {
                keys: key,
                reduce: false,
                include_docs: true
              }
            });
          } else {
            return $http({
              url: url,
              method: 'GET',
              params: {
                key: '"' + key + '"',
                reduce: false,
                include_docs: true
              }
            });
          }
        } else if (url.indexOf('_rewrite') === -1) {
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        } else {
          return $http({
            url: url,
            method: 'GET'
          });
        }
      }

      function tags (tag) {
        var url = '_view/tags';
        return _call(url, tag);
      }

      function categories (category) {
        var url = '_view/categories';
        return _call(url, category);
      }

      function get (id) {
        var url = ['_rewrite', 'api', id].join('/');
        return _call(url);
      }

      return {
        tags: tags,
        categories: categories,
        get: get
      };
    }
  ]);
};