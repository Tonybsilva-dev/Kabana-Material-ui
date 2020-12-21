
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Antônio Bernardino da Silva',
          username: 'tonybsilva',
          password: '000000',
          birth: '2020-01-01',
          email: 'admin@email.com',
          cpf: '000.000.000-00',
          phone:'00 0 0000 0000',
          emergency_phone: '00 0 0000 0000',
          city: 'Somewhere',
          street: 'Somewhere',
          suite: 'No suite',
          zip_code: '00.000-000',
          lat: '-7.2238951',
          lng: '-35.8825037',
        }
      ]);
    });
};
