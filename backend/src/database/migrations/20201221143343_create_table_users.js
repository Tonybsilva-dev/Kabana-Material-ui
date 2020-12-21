
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.date('birth')
    table.string('email')
    table.string('cpf').unique().notNullable()
    table.string('phone').notNullable()
    table.string('emergency_phone')
    table.string('city')
    table.string('street')
    table.string('suite')
    table.string('zip_code')
    table.string('lat')
    table.string('lng')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });


exports.down = knex => knex.schema.dropTable('users')
