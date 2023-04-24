'use strict';

const { BLOB } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Properties',[{
      address: "101 Summit Ave, West Seneca, NY 14224",
      client: 'Bob', 
      agent_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}
    ); 
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
