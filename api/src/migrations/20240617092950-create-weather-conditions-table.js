'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('weather_conditions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: true
      },
      indicativo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      provincia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      altitud: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      tmed: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      prec: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tmin: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      tmax: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      dir: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      velmedia: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      racha: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      sol: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      presMax: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      presMin: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      hrMedia: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      hrMax: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      hrMin: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('weather_conditions')
  }
}
