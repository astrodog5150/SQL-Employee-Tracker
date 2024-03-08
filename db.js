const mysql = require('mysql2');

// Create a pool using promise wrapper
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Korra22_root!',
  database: 'employee_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise(); // Use .promise() to enable promise-based operations

// Export the pool to be used in other modules
module.exports = pool;