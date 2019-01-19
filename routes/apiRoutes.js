// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the job posts
  app.get("/api/Job/", function(req, res) {
    db.Job.findAll().then(function(dbJob) {
      res.json(dbJob);
    });
  });

  // GET route for getting all of the BaconeerInfo
  app.get("/api/BaconeerInfo/", function(req, res) {
    db.BaconeerInfo.findAll().then(function(dbBaconeerInfo) {
      res.json(dbBaconeerInfo);
    });
  }); 

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);

    db.Job.create({
      company_name: req.body.company_name,
      job_title: req.body.job_title,
      job_link: req.body.job_link,
      desciription: req.body.description,
      salary: req.body.salary
    }).then(function(dbJob) {
      res.json(dbJob);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.BaconeerInfo.create({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(function(dbBaconeerInfo) {
      res.json(dbBaconeerInfo);

    });
  });

  
}

