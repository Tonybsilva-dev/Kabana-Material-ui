import express from 'express'
import mysql from 'mysql';
const config = require('./database/connection');
let connection = mysql.createConnection(config);
import '@controllers/UsersController'

const app = express()

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected Database! 😉");
});

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

app.listen(3333, () => console.log('Server is running! 🚀'))