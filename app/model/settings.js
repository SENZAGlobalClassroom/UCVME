const pool = require('./db');
const bcrypt = require('bcrypt');

const settingModel = function(curUser, username, currentPassword, callback) {

    // First, fetch the existing password hash from the database for the current user
    pool.query('SELECT profile_password from profile WHERE profile_username = $1', [curUser], (err, result) => {
        if (err) {
            console.error('Error executing query to get current password', err.stack);
            callback({ success: false, message: 'Internal Server Error' });
            return;
        }

        // If for some reason the user is not found, don't continue
        if (result.rows.length === 0) {
            callback({ success: false, message: 'User not found' });
            return;
        }

        // Compare the password given with the stored hashed password for the user
        const storedHash = result.rows[0].profile_password;

        bcrypt.compare(currentPassword, storedHash, (err, isMatch) => {
            if (err) {
                console.error('Error comparing password:', err);
                callback({ success: false, message: 'Login error' });
                return;
            }

            // Incorrect password entered
            if (!isMatch) {
                callback({ success: false, message: 'Incorrect password' });
                return;
            }

            // Password is correct, proceed with username update
            // Check if the desired username exists already in the database
            pool.query('SELECT 1 FROM profile WHERE profile_username = $1', [username], (err, checkResult) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    callback({ success: false, message: 'Internal Server Error' });
                    return;
                }

                // Desired username exists already
                if (checkResult.rows.length != 0) {
                    callback({ success: false, message: 'Username already exists' });
                    return;
                }

                // If username is available, update here
                const updateQuery = 'UPDATE profile SET profile_username = $1 WHERE profile_username = $2 RETURNING *';
                pool.query(updateQuery, [username, curUser], (err, updateResult) => {
                    if (err) {
                        console.error('Error updating username', err.stack);
                        callback({ success: false, message: 'Update failed' });
                        return;
                    }

                    // Check if the update was successful
                    if (updateResult.rows.length > 0) {
                        callback({ success: true, message: 'Username updated', newUser: updateResult.rows[0] });
                    } else {
                        callback({ success: false, message: 'Update failed' });
                    }
                });
            });
        });
    });
};

module.exports = settingModel;
