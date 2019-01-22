// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring models
var db = require("../models");
var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);


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
  

  // POST route for saving a new Baconeer
  app.post('/public/registration', function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
   db.Baconeer.create({

     email: req.body.email,
     password: hash
     }).then(function(data) {
      if (data) {
      res.redirect('/registration');
      }
    });
   });
  });

  app.post('/log-in', function (req, res) {
    db.Baconeer.findOne({

         where: {
             email: req.body.email
                }
    }).then(function (user) {
        if (!user) {
           res.redirect('/log-in');
        } else {
bcrypt.compare(req.body.password, user.password, function (err, result) {
       if (result == true) {
           res.redirect('/log-in');
       } else {
        res.send('Incorrect username or password');

        res.redirect('/');
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
      job_title: req.body.job_title,
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
};
