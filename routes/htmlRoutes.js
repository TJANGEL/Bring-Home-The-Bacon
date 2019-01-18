// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // login route loads log-in.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/log-in.html"));
  });

  // newjob route loads addjob.html
  app.get("/newjob", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addjob.html"));
  });

  // jobs route loads the jobs.html
  app.get("/jobs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/jobs.html"));
  });

};
