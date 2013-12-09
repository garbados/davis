module.exports = function (app) {
  // TODO: configure where you deployed your Davis couchapp
  app.constant('url_root', 'http://localhost:5984/test_porter/_design/davis');
};