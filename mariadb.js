//mariadb node.js connector
const mariadb = require('mariadb');

//dont mess with the db stuff still trying to figure it out
//creating a connection pool
const pool = mariadb.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'admin',
	password: 'P@ssw0rd',
	database: 'todo',
	connectionLimit: 5
});

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});

