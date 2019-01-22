// var bcrypt = require("bcrypt");
// var db = {};

module.exports = function(sequelize, DataTypes) {
  var Baconeer = sequelize.define("Baconeer", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 36]
      }
    }
  });

  return Baconeer;
};

// var email = req.body.email;
// var password = req.body.password;

// bcrypt.hash(password, saltRounds, function(err, hash) {
//   db.query("INSERT INTO baconeer(email, password)VALUES (?, ?)"),
//     [email, password],
//     function(error, results, fields) {
//       if (error) throw error;

//       db.query("SELECT LAST_INSERT_ID() as user_id", function(
//         error,
//         results,
//         fields
//       ) {
//         if (error) throw error;

//         const user_id = results[0];

//         console.log(results[0]);
//         req.login(user_id, function(err) {
//           res.redirect("/");
//         });
//       });
//     };
// });
