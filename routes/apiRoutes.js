// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring models
var db = require("../models");
var bcrypt = require("bcrypt");
const saltRounds = 8;

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the job posts
  app.get("/api/Jobs/", function(req, res) {
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

  // GET route for email and password
  app.get("/public/registration", function(req, res) {
    db.Baconeer.findAll().then(function(dbBaconeer) {
      res.json(dbBaconeer);
    });
  });

  // posting encrypted password
  app.post("/api/Baconeer", function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      db.Baconeer.create({
        email: req.body.email,
        password: hash
      }).then(function(dbBaconeer) {
        if (dbBaconeer) {
          res.redirect("/");
        }
      });
    });
  });

  // comparing password to encrypted password
  app.post("/baconeer", function(req, res) {
    db.Baconeer.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(dbBaconeer) {
      if (!dbBaconeer) {
        res.redirect("/");
      } else {
        bcrypt.compare(req.body.password, hash, function(err, result) {
          if (result == true) {
            console.log("hello")
            res.redirect("/newjob");
          } else {
            console.log("Incorrect password");
            res.redirect("/");
          }
        });
      }
    });
  });

  // route for saving new job
  app.post("/api/Jobs", function(req, res) {
    console.log(req.body);

    db.Job.create({
      company_name: req.body.company_name,
      job_description: req.body.job_description,
      job_link: req.body.job_link,
      salary: req.body.salary,
      location: req.body.location,
      applied: req.body.applied,
      pre_interview: req.body.pre_interview,
      interview: req.body.interview,
      offer: req.body.offer,
      comments: req.body.comments
    }).then(function(dbJob) {
      res.json(dbJob);
    });
  });
};
