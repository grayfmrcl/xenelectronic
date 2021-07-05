const tableName = 'product';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    category_id: {
      type: Sequelize.UUID,
      allowNull: true,
      references: { model: 'category', key: 'id' },
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable(tableName),
};
