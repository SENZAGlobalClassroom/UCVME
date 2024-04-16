const { Pool } = require('pg');
const bcrypt = require('bcrypt')

const loginModel = function(username, password, callback) {
    console.log('Request body:', {username, password}); // Log the request body to verify data received

    const pool = new Pool({ // create a pool of connections
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 5432 // default PostgreSQL port
    });

    pool.query('SELECT * FROM profile WHERE profile_email = $1', [username], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            callback({ success: false, message: 'Internal Server Error' });
            return;
        }
        if (result.rows.length === 0) {
            callback({ success: false, message: 'User not found' });
            return;
        }

        const user = result.rows[0];
         
        bcrypt.compare(password, user.profile_password, (err, isMatch) => {
            if (err) {
                console.log(err);   
                callback({ success: false, message: 'Login error' });
                return;
            }
            if (isMatch) {
                callback({ success: true, message: 'Login successful', user });
            } else {
                callback({ success: false, message: 'Invalid password' });
            }
        });
    }); 
};

module.exports = loginModel;
