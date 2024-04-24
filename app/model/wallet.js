// sql query for registering an account into the database
const { Pool } = require('pg');

const walletModel = function(walletData, cv_phonenumber, response) {
    console.log('Request body:', walletData);

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
            return response({ success: false, message: 'Add wallet failed' });
        }

        console.log('Connected to database');

        client.query('insert into wallet (wallet_title, cv_phonenumber) values ($1, $2) returning *',
        [
            walletData.wallet_title,
            cv_phonenumber
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

module.exports = walletModel;
