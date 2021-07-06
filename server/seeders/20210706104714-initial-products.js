const tableName = 'product';
const uuid = require('uuid/v4');

const products = [{
  id: uuid(),
  category_id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
  name: 'PlayStation 5 (Standard)',
  price: 399,
  image_url: 'https://source.unsplash.com/NVD_32BBZFE/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
  name: 'Nintendo Switch V2',
  price: 299,
  image_url: 'https://source.unsplash.com/EdUYo2Y435s/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '400fa6cb-25fd-435c-acfb-70fc816277c7',
  name: 'iPhone 11 Pro Max 256GB',
  price: 869,
  image_url: 'https://source.unsplash.com/YLNMXzXk8zs/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '400fa6cb-25fd-435c-acfb-70fc816277c7',
  name: 'Google Pixel 4 64GB',
  price: 239.99,
  image_url: 'https://source.unsplash.com/BBuxnOkl2Uk/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '2cdf778a-2dbb-425f-8395-e9fc0bbadc41',
  name: 'Amazon Kindle',
  price: 79.99,
  image_url: 'https://source.unsplash.com/HIctpU2PA8E/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '57830003-e335-4c25-b063-ba25c358fbce',
  name: 'Harman Kardon Onyx 5',
  price: 64.99,
  image_url: 'https://source.unsplash.com/j52fOH8kZT4/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '4a2fe6e6-ddf4-46ce-9b8f-cc69c3f9faf1',
  name: 'AMD Ryzen 7 3700X',
  price: 299.99,
  image_url: 'https://source.unsplash.com/60g-xu5-zfk/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: uuid(),
  category_id: '319aad29-a505-4712-b3e7-b2100c208c4c',
  name: 'MacBook Pro M1 13-inch 256GB',
  price: 1299.99,
  image_url: 'https://source.unsplash.com/Jb9GwgUYQSI/300x200',
  created_at: new Date(),
  updated_at: new Date(),
}];

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, products),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, { }),
};
