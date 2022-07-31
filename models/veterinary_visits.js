"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Veterinary_Visits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pets);
    }
  }
  Veterinary_Visits.init(
    {
      vet_name: DataTypes.STRING,
      date_of_visit: DataTypes.STRING,
      reason: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Veterinary_Visits",
    }
  );
  return Veterinary_Visits;
};
