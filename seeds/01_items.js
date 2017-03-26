
exports.seed = function(knex, Promise) {
  return knex('booknames').del()
    .then(function () {
      return knex('booknames').insert([
        {
          item: 'HP1',
          num_page: 500,
          author: 'JK Rowl'
        },
        {
          item: 'HP2',
          num_page: 600,
          author: 'JK Rowl'
        },
        {
          item: 'HP3',
          num_page: 700,
          author: 'JK Rowl'
        }
      ])
    })
};
