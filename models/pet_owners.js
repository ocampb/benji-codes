'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet_Owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet_Owners.init({
    PetID: DataTypes.STRING,
    OwnerID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet_Owners',
  });
  return Pet_Owners;
};