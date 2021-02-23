'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transaction_types', [
      {
        name: 'Recebível'
      },
      {
        name: 'Conta'
      },
      {
        name: 'Fatura'
      },
      {
        name: 'Transferência'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transaction_types', null, {})
  }
};
