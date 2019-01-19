module.exports = function(sequelize, DataTypes) {
  var Baconeer = sequelize.define("Baconeer", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 36]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    }
  });

  

  return Baconeer;
};
