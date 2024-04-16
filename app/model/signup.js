const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Validation functions
function isValidName(value) { 
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(value);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  return passwordRegex.test(password);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function signupModel(username, email, password, callback) {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Sp00ky!',
        port: 5432
    });


    try {
        // Validate user data before database queries
        if (!isValidName(username)) {
            return callback({ success: false, message: "Invalid username" });
        } else if (!isValidEmail(email)) {
            return callback({ success: false, message: "Invalid email address" });
        } else if (!isValidPassword(password)) {
            return callback({ success: false, message: "Invalid password format" });
        }

        // Check if the username or email already exists
        const existingUserQuery = 'SELECT 1 FROM profile WHERE profile_username = $1';
        const existingUserResult = await pool.query(existingUserQuery, [username]);

        if (existingUserResult.rows.length > 0) {
            return callback({ success: false, message: "Username already exists" });
        }

        const existingEmailQuery = 'SELECT 1 FROM profile WHERE profile_email = $1';
        const existingEmailResult = await pool.query(existingEmailQuery, [email]);

        if (existingEmailResult.rows.length > 0) {
            return callback({ success: false, message: "Email already exists" });
        }

        // Hash the password and insert the new user
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const insertUserQuery = 'INSERT INTO profile(profile_username, profile_email, profile_password) VALUES($1, $2, $3) RETURNING *';
        const newUser = await pool.query(insertUserQuery, [username, email, hashedPassword]);

        if (newUser.rows.length > 0) {
            return callback({ success: true, message: "Signup successful" });
        } else {
            return callback({ success: false, message: "Registration failed" });
        }
    } catch (error) {
        console.error('Error during registration:', error);
        return callback({ success: false, message: "Internal Server Error" });
    } finally {
        pool.end(); // Properly close the pool resources after the operation
    }
}

module.exports = signupModel;
