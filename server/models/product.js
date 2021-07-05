const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define('product', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  categoryId: {
    allowNull: true,
    type: Sequelize.UUID,
    references: { model: 'category', key: 'id' },
    field: 'category_id',
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  imageUrl: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'image_url',
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
  tableName: 'product',
  timestamps: true,
});
