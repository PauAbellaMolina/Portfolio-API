'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  Project.init({
    title: DataTypes.STRING,
    title_font_size: DataTypes.DOUBLE,
    cover_image: DataTypes.TEXT,
    description_1: DataTypes.STRING,
    description_2: DataTypes.STRING,
    description_3: DataTypes.STRING,
    description_4: DataTypes.STRING,
    description_5: DataTypes.STRING,
    developed_1: DataTypes.STRING,
    developed_2: DataTypes.STRING,
    developed_3: DataTypes.STRING,
    developed_4: DataTypes.STRING,
    developed_5: DataTypes.STRING,
    developed_6: DataTypes.STRING,
    developed_7: DataTypes.STRING,
    developed_8: DataTypes.STRING,
    deployed_1: DataTypes.STRING,
    deployed_2: DataTypes.STRING,
    deployed_3: DataTypes.STRING,
    deployed_4: DataTypes.STRING,
    deployed_5: DataTypes.STRING,
    deployed_6: DataTypes.STRING,
    deployed_7: DataTypes.STRING,
    deployed_8: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Project',
  });
  
  return Project;
};