
exports.up = function(knex) {
  return knex.schema.createTable('booknames', b => {
    b.increments('id')
    b.string('item')
    b.integer('num_page')
    b.string('author')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('booknames')
}
