'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Financeiro',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alimentação',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Farmácia',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
