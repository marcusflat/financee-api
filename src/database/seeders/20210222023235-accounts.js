'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accounts', [{
      uuid: uuidv4(),
      team_id: 1,
      name: 'Banco Inter - Credito',
      initial_balance: 100.00,
      active: true,
      created_at: new Date(),
      updated_at: new Date()
    }], {

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Account', null, {});
     */
  }
};
