module.exports = function(sequelize, DataTypes) {
  var Baconeer = sequelize.define("Baconeer", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    pass_word: {
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
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 11]
      }
    },
  });

  Baconeer.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Baconeer.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Baconeer;
};