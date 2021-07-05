const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define('category', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'updated_at',
  },
}, {
  sequelize,
  tableName: 'category',
  timestamps: true,
});
