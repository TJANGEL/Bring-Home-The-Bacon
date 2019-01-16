module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    job_title: DataTypes.STRING,
    company: DataTypes.STRING,
    PoC: DataTypes.STRING,
    PoC_email: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Job.associate = function(models) {
    
   
  };

  return Job;
};