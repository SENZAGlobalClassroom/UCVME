const pool = require('./db');

const updateUserSettings = function(userData, currentPassword, newPassword, response) {

    pool.query('SELECT * from profile WHERE profile_username = $1', [username], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            callback({ success: false, message: 'Internal Server Error' });
            return;
        }

        if (result.rows.length === 0) {
            callback({ success: false, message: 'User not found' });
            return;
        }

        console.log(result.rows[0]);
    });
};

module.exports = updateUserSettings;
