module.exports = function(sequelize, DataTypes) {
    var Applying = sequelize.define("Applying", {
        // associated Baconeer information
        // general info    
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Applying;
  };
  