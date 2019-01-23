module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    job_description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 180]
      }
    },
    job_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },
    applied: {
      type: DataTypes.BOOLEAN
    },
    pre_interview: {
      type: DataTypes.BOOLEAN
    },
    interview: {
      type: DataTypes.BOOLEAN
    },
    offer: {
      type: DataTypes.BOOLEAN
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  return Job;
};
