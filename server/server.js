/*'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');


var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});*/

 var loopback = require('loopback');
 var boot = require('loopback-boot');
 var cfenv = require("cfenv")
 
 // cfenv provides access to your Cloud Foundry environment
 // for more info, see: https://www.npmjs.com/package/cfenv
 var cfenv = require('cfenv');
 
 // get the app environment from Cloud Foundry
 var appEnv = cfenv.getAppEnv();
 
 var app = module.exports = loopback();
 
 app.start = function() {
   // start the web server
   return app.listen(appEnv.port, appEnv.bind, function() {
     app.emit('started');
     console.log('Web server listening at: %s', app.get('url'));
   });
 };
 
 // Bootstrap the application, configure models, datasources and middleware.
 // Sub-apps like REST API are mounted via boot scripts.
 boot(app, __dirname, function(err) {
   if (err) throw err;
 
   // start the server if `$ node server.js`
   if (require.main === module)
     app.start();
 });