module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 35]
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    job_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 180]
      }
    },
   salary: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    }
  });

  return Job;
};