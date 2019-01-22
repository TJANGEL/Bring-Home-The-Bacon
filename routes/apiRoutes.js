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

  app.get("/api/Baconeer/", function(req, res) {
    db.Baconeer.findAll().then(function(dbBaconeer) {
      res.json(dbBaconeer);
    });
  }); 

  // POST route for saving a new post
  app.post("/api/Job", function(req, res) {
    console.log(req.body);

    db.Job.create({
      company_name: req.body.company_name,
      desciription: req.body.description,
      job_link: req.body.job_link,
      salary: req.body.salary,
      location: req.body.location,
      applied: req.body.applied,
      pre_interview: req.body.pre_interview,
      interview: req.body.interview,
      offer: req.body.interview,
      comments: req.body.comments   
    }).then(function(dbJob) {
      res.json(dbJob);
    });
  });

  // POST route for saving a new post
  app.post("/api/BaconeerInfo", function(req, res) {
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

    app.post("/api/Baconeer", function(req, res) {
      console.log(req.body);
      db.Baconeer.create({
        email: req.body.email,
        password: req.body.password
      }).then(function(dbBaconeer) {
        res.json(dbBaconeer);
  
      });
  });

} 


