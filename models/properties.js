'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Properties.belongsTo(models.Agents, {
        foreignKey: "agentId"
      });
      Properties.hasMany(models.Clients, {
        foreignKey: 'clientId'
      });
    }
  }
  Properties.init({
    address: DataTypes.STRING,
    agent_id: DataTypes.STRING,
    client: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Properties',
  });
  return Properties;
};