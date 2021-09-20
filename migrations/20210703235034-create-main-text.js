'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MainTexts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subheading: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      },
      footer_1: {
        type: Sequelize.TEXT
      },
      footer_2: {
        type: Sequelize.TEXT
      },
      footer_3: {
        type: Sequelize.TEXT
      },
      footer_4: {
        type: Sequelize.TEXT
      },
      footer_5: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MainTexts');
  }
};