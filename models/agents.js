'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agents.hasMany(models.Clients,{foreignKey:'name'})
      Agents.hasMany(models.Properties,{foreignKey:'id'})
    }
  }
  Agents.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agents',
  });
  return Agents;
};