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
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      footer_1: {
        type: Sequelize.STRING
      },
      footer_2: {
        type: Sequelize.STRING
      },
      footer_3: {
        type: Sequelize.STRING
      },
      footer_4: {
        type: Sequelize.STRING
      },
      footer_5: {
        type: Sequelize.STRING
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