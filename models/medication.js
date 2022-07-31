"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pets);
    }
  }
  Medication.init(
    {
      name: DataTypes.STRING,
      dosage: DataTypes.STRING,
      date_administered: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Medication",
    }
  );
  return Medication;
};
