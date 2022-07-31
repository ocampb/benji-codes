"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enrichment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pets);
    }
  }
  Enrichment.init(
    {
      type: DataTypes.STRING,
      duration: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Enrichment",
    }
  );
  return Enrichment;
};
