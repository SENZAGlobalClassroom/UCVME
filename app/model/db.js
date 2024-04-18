const { Pool } = require('pg');

// Create a database connection and export it
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Sp00ky!',
    port: 5432
});

module.exports = pool;
