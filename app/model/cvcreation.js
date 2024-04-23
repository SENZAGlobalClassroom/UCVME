// sql query for registering an account into the database
const { Pool } = require('pg'); // PostgreSQL client library

const cvModel = function(cvData, response) {
    console.log('Request body:', cvData); // Log the request body to verify data received

    const pool = new Pool({ // create a pool of connections
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 54321 // default PostgreSQL port
    });

    pool.connect((err, client, release) => { // Connect to the database
        if (err) { // error connecting to database
            console.error('Error connecting to database:', err);
            release(); // release the client back to the pool
            return response({ success: false, message: 'Database connection error' });
        }

        console.log('Connected to database'); // console log database connected

        client.query(
            'INSERT INTO create_cv(cv_firstname, cv_lastname, cv_phonenumber, cv_email, cv_country, cv_colour, cv_mbti, cv_job_title, cv_job_category, cv_start_date, cv_end_date, cv_description_work, cv_memory, cv_reference_ph_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
            // insert query to add a new user to the profile table, $1, $2, $3 are placeholders for the user inputs
            [
                cvData.cv_firstname,
                cvData.cv_lastname,
                cvData.cv_phonenumber,
                cvData.cv_email,
                cvData.cv_country,
                cvData.cv_colour,
                cvData.cv_mbti,
                // cvData.cv_job_title,
                // cvData.cv_job_category,
                // cvData.cv_start_date,
                // cvData.cv_end_date,
                // cvData.cv_description_work,
                // cvData.cv_memory,
                // cvData.cv_reference_ph_number
            ],
            (err, result) => {
                release(); // release the client back to the pool

                if (err) { // error executing INSERT query
                    console.error('Error executing INSERT query:', err);
                    return response({ success: false, message: 'CV creation failed' });
                }

                if (result.rows.length === 0) { // no rows returned after INSERT
                    console.error('No rows returned after INSERT');
                    return response({ success: false, message: 'CV creation failed' });
                }

                console.log('CV created successfully');
                response({ success: true, message: 'CV creation successful', data: result.rows[0] }); // send response with inserted data
            }
        );
    });
};

module.exports = cvModel;
