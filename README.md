# API

## Sequelize

### Sequelize Flow

1. Create migration  
   
   ```bash
    npx sequelize migration:create --name create-users
   ```
2. Populate migration file with what you and add/modify.
   
   ```javascript
    'use strict';

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', { 
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
          firebaseId: Sequelize.STRING,
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          preferences: Sequelize.JSONB,
          create_at: {
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
        await queryInterface.dropTable('users');
      }
    };

   ```

3. Run migration
   
   ```bash
    npx sequelize db:migrate
   ```

4. Caso você precise desfazer essa migration (a última migration):
   ```bash
    npx sequelize db:migrate:undo
   ```
5. To read .env file to the connection of database use:

  ```bash
    npx env-cmd sequelize db:migrate
  ```