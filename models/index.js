"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);



// const email = req.body.email;
// const password = req.body.password;

// bcrypt.hash(password, saltRounds, function(err, hash){
//   db.query('INSERT INTO users(email, password)VALUES (?, ?)'), [email, password],
//   function(error, results, fields){
//     if (error) throw error;

//     db.query('SELECT LAST_INSERT_ID() as user_id', function(error, results, fields){
//       if(error) throw error;

//       const user_id = results[0];

//       console.log(results[0])
//       req.login(user_id, function(err){
//         res.redirect('/');
//       })
//     })
//     res.render('register', { title: 'Registration Compelte'});
//   }
// });

// passport.serializeUser(function(user, done) {
//   done(null, user_id);
// });

// passport.deserializeUser(function(user_id, done) {
//   User.findById(user_id, function (err, user_id) {
//     done(err, user_id);
//   });
// });

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
