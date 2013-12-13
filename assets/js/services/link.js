module.exports = function (app) {
  app.filter('link', [
    function () {
      return function (input) {
        if (input) {
          var url = input.match(/href="(.*?)"/);
          if (url) {
            var host = url[1].match(/\/\/(.*?)\//);
            return {
              url: url[1],
              host: host[1]
            };
          }
        }
        return '#!';
      };
    }
  ]);
};