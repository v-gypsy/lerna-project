'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Joey',
        lastName: 'Tribbiani',
        age: 30,
        createdAt: new Date()
      },
      {
        firstName: 'Chandler',
        lastName: 'Bing',
        age: 31,
        createdAt: new Date()
      },
      {
        firstName: 'Ross',
        lastName: 'Geller',
        age: 32,
        createdAt: new Date()
      },
      {
        firstName: 'Rachel',
        lastName: 'Greens',
        age: 33,
        createdAt: new Date()
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        age: 34,
        createdAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
