'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accounts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      initial_balance: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      active: Sequelize.BOOLEAN,
      created_at: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('accounts');
  }
};
