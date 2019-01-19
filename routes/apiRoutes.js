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

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
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
      firstnaeme: req.body.firstName,
      lastName: req.body.lastName
    }).then(function(dbBaconeerInfo) {
      res.json(dbBaconeerInfo);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
