
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Antônio Bernardino da Silva',
          username: 'tonybsilva',
          password: '0000',
          cpf: '000.000.000-00',
          phone:'00 0 0000 0000'
        }
      ]);
    });
};
