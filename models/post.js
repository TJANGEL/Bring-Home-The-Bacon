module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // body: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   len: [1]
    // },
    jobDescription: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 180]
      }
    },
    jobLink: {
      type: DataTypes.STRING,
      allowNull: true
      // validate: {
      //   len: [1, 25]
      // }
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true
      // validate: {
      //   len: [1, 45]
      // }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
      // validate: {
      //   len: [1, 25]
      // }
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
      // validate: {
      //   len: [1, 140]
      // }
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
