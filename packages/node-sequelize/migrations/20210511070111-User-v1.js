'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'email', { allowNull: true, type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
