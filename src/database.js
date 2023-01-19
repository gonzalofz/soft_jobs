const { Client } = require("pg");

const connectionData = {
  host: "localhost",
  user: "postgres",
  database: "softjobs",
  password: "123456",
  port: 5432,
};

const clientDB = new Client(connectionData);

module.exports = clientDB;
