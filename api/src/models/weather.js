module.exports = function (sequelize, DataTypes) {
  const Weather = sequelize.define('Weather', // Define que va a haber un modelo
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true
      },
      indicativo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: true
      },
      altitud: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      tmed: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      prec: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tmin: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      tmax: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      dir: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      velmedia: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      racha: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      sol: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      presMax: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      presMin: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      hrMedia: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      hrMax: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      hrMin: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'weather_conditions',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Weather.associate = function (models) {
  }

  return Weather
}
