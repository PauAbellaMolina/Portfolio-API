'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      title_font_size: {
        type: Sequelize.INTEGER
      },
      cover_image: {
        type: Sequelize.TEXT
      },
      description_1: {
        type: Sequelize.STRING
      },
      description_2: {
        type: Sequelize.STRING
      },
      description_3: {
        type: Sequelize.STRING
      },
      description_4: {
        type: Sequelize.STRING
      },
      description_5: {
        type: Sequelize.STRING
      },
      developed_1: {
        type: Sequelize.STRING
      },
      developed_2: {
        type: Sequelize.STRING
      },
      developed_3: {
        type: Sequelize.STRING
      },
      developed_4: {
        type: Sequelize.STRING
      },
      developed_5: {
        type: Sequelize.STRING
      },
      developed_6: {
        type: Sequelize.STRING
      },
      developed_7: {
        type: Sequelize.STRING
      },
      developed_8: {
        type: Sequelize.STRING
      },
      deployed_1: {
        type: Sequelize.STRING
      },
      deployed_2: {
        type: Sequelize.STRING
      },
      deployed_3: {
        type: Sequelize.STRING
      },
      deployed_4: {
        type: Sequelize.STRING
      },
      deployed_5: {
        type: Sequelize.STRING
      },
      deployed_6: {
        type: Sequelize.STRING
      },
      deployed_7: {
        type: Sequelize.STRING
      },
      deployed_8: {
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
    await queryInterface.dropTable('Projects');
  }
};