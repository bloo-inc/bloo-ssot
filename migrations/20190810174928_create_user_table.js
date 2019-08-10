
exports.up = function(knex) {
  return knex.schema.createTable('bloo_users', function(t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').notNull();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bloo_users');
};
