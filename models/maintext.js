'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainText extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MainText.init({
    subheading: DataTypes.STRING,
    about: DataTypes.STRING,
    footer_1: DataTypes.STRING,
    footer_2: DataTypes.STRING,
    footer_3: DataTypes.STRING,
    footer_4: DataTypes.STRING,
    footer_5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MainText',
  });
  return MainText;
};