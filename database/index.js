const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DATA_BASE_USERNAME,
  port: 8889,
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_NAME,
});

connection.connect((err) => {
  if (err) throw err;

  // If connected
  console.log("DataBase Connected! 🧨");
});

module.exports = connection;
