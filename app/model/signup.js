// sql query for registering an account into the database
const { Pool } = require('pg'); // PostgreSQL client library

const signupModel = function(userData, response) {
    console.log('Request body:', userData); // Log the request body to verify data received

    const pool = new Pool({ // create a pool of connections
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 5432 // default PostgreSQL port
    });

    pool.connect((err, client, release) => { // Connect to the database
        if (err) { // error occurs, display console message
            console.error('Error connecting to database:', err);
            return response({ success: false, message: 'Registration failed' });
        }

        console.log('Connected to database'); // console log database connected

        client.query(
            'INSERT INTO profile (profile_username, profile_email, profile_password) VALUES ($1, $2, $3)',
            // insert query to add a new user to the profile table, $1, $2, $3 are placeholders for the user inputs
            [
                userData.username, // stores in userData
                userData.email,
                userData.password
            ],
            
            (err, result) => {
                release(); // Release the client to the pool regardless of the outcome
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

                console.log('User registered successfully');
                response({ success: true, message: 'Registration successful' }); // send response in web server
            }
        );
    });
};

module.exports = signupModel;
