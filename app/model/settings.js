// sql query for registering an account into the database
const { Pool } = require('pg'); // PostgreSQL client library

const updateUserSettings = function(userData, currentPassword, newPassword, response) {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 5432
    });

    pool.connect((err, client, release) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return response({ success: false, message: 'Database connection failed' });
        }

        // First, confirm the current password is correct
        client.query(
            'SELECT profile_password FROM profile WHERE profile_username = $1',
            [userData.username],
            (err, result) => {
                if (err) {
                    release();
                    console.error('Error fetching user data:', err);
                    return response({ success: false, message: 'Failed to verify user.' });
                }

                if (result.rows.length > 0 && result.rows[0].profile_password === currentPassword) {
                    // Update the user's settings if the password matches
                    client.query(
                        'UPDATE profile SET profile_username = $1, profile_email = $2, profile_password = $3 WHERE profile_username = $4',
                        [userData.username, userData.email, newPassword || currentPassword, userData.username],
                        (err, result) => {
                            release();
                            if (err) {
                                console.error('Error updating user settings:', err);
                                return response({ success: false, message: 'Update failed. Please try again.' });
                            }
                            console.log('User settings updated successfully');
                            response({ success: true, message: 'User settings updated successfully' });
                        }
                    );
                } else {
                    release();
                    response({ success: false, message: 'Current password is incorrect.' });
                }
            }
        );
    });
};

module.exports = updateUserSettings;
