// sql for selecting user from database based on email, used for when logging in, checks email and password from the database
// login.js
const { Pool } = require('pg'); // PostgreSQL client library
const bcrypt = require('bcrypt');

const loginModel = function(username, password, response) {
    const pool = new Pool({ // create a pool of connections
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 54321 // default PostgreSQL port
    });

    pool.connect((err, client, release) => { // Connect to the database
        if (err) { // error occurs, display console message
            console.error('Error connecting to database:', err);
            return response({ success: false, message: 'Login failed' });
        }

        console.log('Connected to database'); // console log database connected

        client.query(
            'SELECT * FROM signup WHERE signup_username = $1',
            [username],
            (err, result) => {

                
                if (result.rows.length === 0) { // user not found
                    return response({ success: false, message: 'User not found' });
                }
    
                const user = result.rows[0]; // get the first user
                bcrypt.compare(password, user.signup_password, function(err, success) {
                    if (err) {
                        console.error('Error comparing passwords:', err);
                        return response({ success: false, message: 'Internal Server Error' });
                    }
                    if (success) {
                        return response({ success: true, message: 'Login successful', user });
                    } else {
                        return response({ success: false, message: 'Invalid password' });
                    }
                });
            }
        );
    });
};
module.exports = loginModel;