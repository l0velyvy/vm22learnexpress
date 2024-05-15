'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    snippet() {
      return this.description.substring(0, 300);
    }
    static associate(models) {
      // define association here 
      this.belongsTo(models.User);
    }
  }
  Movie.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    name: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};