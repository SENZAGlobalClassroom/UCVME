// sql query for registering an account into the database
const { Pool } = require('pg');

const addPostModel = function(jobPostData, response) {
    console.log('Request body:', jobPostData);

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 54321
    });

    pool.connect((err, client, release) => {
        if (err) {
            console.error('Error connecting to database:', err);
            release();
            return response({ success: false, message: 'Add post failed' });
        }

        console.log('Connected to database');

        client.query('INSERT INTO job_post (job_post_title, job_post_category, job_post_date, job_post_description) VALUES ($1, $2, $3, $4) RETURNING *',
        [
            jobPostData.job_post_title,
            jobPostData.job_post_category,
            jobPostData.job_post_date,
            jobPostData.job_post_description
        ],
        (err, result) => {
            release();
            if (err) {
                console.error('Error executing INSERT query:', err);
                return response({ success: false, message: 'Failed to add post. Please try again.' });
            }
            
            console.log('Add post successfully');
            response({ success: true, message: 'Add post successful', data: result.rows[0] }); 
        });
    });
};

module.exports = addPostModel;
