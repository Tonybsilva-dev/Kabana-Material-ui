const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile.development)

module.exports = knex

// const config = {
//   host: `127.0.0.1`,
//   database: `Kabana`,
//   user: `root`,
//   password: `123546`,
//   port: `3306`
// }

// module.exports = config;

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: `127.0.0.1`,
//     database: `Kabana`,
//     user: `root`,
//     password: `123546`,
//     port: `3306`
//   }
// });

// module.exports = knex;