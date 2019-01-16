module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 35]
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    PoC_firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    PoC_lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    PoC_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 35]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 180]
      }
    }    
  });

  // Job.associate = function(models) {
    
   
  // };

  return Job;
};