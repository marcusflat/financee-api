'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transaction_statuses', [
      {
        name: 'Agendado'
      },
      {
        name: 'Pago'
      },
      {
        name: 'Recebido'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transaction_statuses', null, {})
  }
};
