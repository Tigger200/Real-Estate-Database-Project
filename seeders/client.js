/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Client', [{
        name: "Jeanne Doe",
        agent_id: 'Agent Bill',
        Property: '101 Karalyle, Atlanta, GA 30350'}], 
        
        {}
        ); 
    },}