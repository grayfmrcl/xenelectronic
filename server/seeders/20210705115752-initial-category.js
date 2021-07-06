const tableName = 'category';

const categories = [{
  id: '400fa6cb-25fd-435c-acfb-70fc816277c7',
  name: 'Smartphone',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '2cdf778a-2dbb-425f-8395-e9fc0bbadc41',
  name: 'Tablet',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '319aad29-a505-4712-b3e7-b2100c208c4c',
  name: 'Laptop',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '4a2fe6e6-ddf4-46ce-9b8f-cc69c3f9faf1',
  name: 'PC',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '4e319403-34e2-4856-aa3f-e847e191bc4d',
  name: 'TV',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '57830003-e335-4c25-b063-ba25c358fbce',
  name: 'Audio',
  created_at: new Date(),
  updated_at: new Date(),
}, {
  id: '2a0a2b5f-2577-482c-b7a1-420f3f6ab7e4',
  name: 'Game Console',
  created_at: new Date(),
  updated_at: new Date(),
}];

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, categories),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, { }),
};
