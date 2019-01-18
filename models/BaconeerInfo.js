module.exports = function(sequelize, DataTypes) {
  var BaconeerInfo = sequelize.define("BaconeerInfo", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    }
  });

  // Baconeer.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Baconeer.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return BaconeerInfo;
};