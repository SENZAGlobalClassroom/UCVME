// sql query for registering an account into the database
const { Pool } = require('pg'); // PostgreSQL client library

const signupModel = function(userData, response) {
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
            return response({ success: false, message: 'Registration failed' });
        }

        console.log('Connected to database'); // console log database connected

        client.query(
            'INSERT INTO signup (signup_username, signup_email, signup_password) VALUES ($1, $2, $3)',
            // insert query to add a new user to the signup table, $1, $2, $3 are placeholders for the user inputs
            [
                userData.signup_username, // stores in userData
                userData.signup_email,
                userData.signup_password
            ],
            (err, result) => {
                if (err) { // error occurs when inserting in the database
                    console.error('Error executing INSERT query:', err);

                    if (err.code === '23505') { // if email is already registered (unique constraint violation)
                        return response({
                            success: false,
                            message: 'Email address is already registered.'
                        });
                    } else { // if email not registered but there's still an error
                        return response({
                            success: false,
                            message: 'Registration failed. Please try again.'
                        });
                    }
                }

                console.log('User registered with ID:', result.rows[0].id); // log the ID of the inserted record to the console
                response({ success: true, message: 'Registration successful' }); // send response in web server

                release(); // release the client to the pool
            }
        );
    });
};

module.exports = signupModel;
