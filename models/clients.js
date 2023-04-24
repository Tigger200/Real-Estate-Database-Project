'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clients.hasMany(models.Agents, {
        foreignKey: 'agentId'
      });
      Clients.hasMany(models.Properties, {
        foreignKey: 'propertyId'
      });
    }
  }
  Clients.init({
    name: DataTypes.STRING,
    agent: DataTypes.STRING,
    property: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};