// server file to handle get and requests from the client
const express = require("express");// using express js to handle these requests
// const session = require('express-session'); // storing session using express session
// const cors = require("cors"); // using corc to ensure both client and server handle on localhost:8080
const path = require('path'); // set path to serve static files
const bcrypt = require('bcrypt'); // using bcrypt for security when storing passwords
// const cookieParser = require('cookie-parser'); // using cookie parser to use cookies for user sessions
// const jwt = require('jsonwebtoken'); // using jsonwebtoken to use token for user authentication for private access
const app = express(); // set app as express js
const cors = require('cors');

// serve static file in view/index.html
const staticPath = path.join(__dirname, '../'); // set index path to index.html in view directory
const saltRounds = 10; // salt round set to 10 for hashing password
const { Pool } = require('pg'); // PostgreSQL client library


var model = require('../model/index'); 

app.use(express.static(staticPath)); // configure app to serve static files from the view directory
app.use(express.json()); // handle json and form data
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Sp00ky!',
    port: 5432
  });

  try {
    // Check if the user already exists
    const userExistsQuery = 'SELECT * FROM profile WHERE profile_username = $1';
    const userResult = await pool.query(userExistsQuery, [username]);

    const emailExistsQuery = 'SELECT * FROM profile WHERE profile_email = $1';
    const emailResult = await pool.query(emailExistsQuery, [email]);

    if (userResult.rows.length > 0) {
      // If user exists, send a conflict response and stop further execution
      return res.status(409).json({ error: "Username-dupe" });
    }

    if (emailResult.rows.length > 0) {
      // If user exists, send a conflict response and stop further execution
      return res.status(409).json({ error: "Email-dupe" });
    }

    // Validate user data
    if (!isValidName(username)) {
      return res.status(409).json({ error: "Invalid-username" });
    } else if (!isValidEmail(email)) {
      return res.status(409).json({ error: "Invalid-email" });
    } else if (!isValidPassword(password)) {
      return res.status(409).json({ error: "Invalid-password" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user
    const insertUserQuery = 'INSERT INTO profile(profile_username, profile_email, profile_password) VALUES($1, $2, $3) RETURNING *';
    const newUser = await pool.query(insertUserQuery, [username, email, hashedPassword]);

    // If insertion is successful, send a success response
    if (newUser.rows.length > 0) {
      console.log('Registration successful.');
      return res.status(201).json({ message: "Signup successful" });
    } else {
      // Handle unexpected failure
      return res.status(500).json({ error: "Registration failed for unknown reasons" });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


function isValidName(value) // function to validate name as strings when registering
{ 
  const nameRegex = /^[A-Za-z\s]+$/; // letters only
  return nameRegex.test(value);
}


function isValidPassword(password) // function to validate password when registering
{
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/; // password must contain at least one lowercase letter, one uppercase letter, one number, and one special character
  return passwordRegex.test(password);
}

function isValidEmail(email) // function to validate email format
{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // must contain @ .
}

// serve login route using express
// app.post('/login', function (req, res) 
// {
//   var username = req.body.username; // fetch username
//   var password = req.body.password; // fetch password

//   console.log('Request body:', req.body);
  
//   console.log('Calling login for username:', username); // logging username
//   model.loginModel(username, password, function(err, userData)  // executing login query from model
//   {
//     if (err) {
//       console.error('Error fetching user:', err);
//       return res.status(500).json("Internal Server Error");
//     } 
//     if (!userData) // no user data then user is not found
//     {
//       return res.status(401).json("User not found. Register first");
//     }
    
//     var mySavedPwd = userData.signup_password; //comparing password to login
    
//     // debugging
//     console.log('Input Password:', password);
//     console.log('Hashed Password from Database:', mySavedPwd);
    
//     bcrypt.compare(password, mySavedPwd, function(err, success) // comparing input password and saved password in database
//     {
//       console.log('Inside bcrypt.compare callback');
//       console.log('Error comparing passwords:', err);
//       console.log('Password comparison result:', success);
//       if (err) // error when comparing
//       {
//         console.error('Error comparing passwords:', err);
//         return res.status(500).json("Internal Server Error");
//       }
//       if (success) // success comparing passwords
//       {
//         console.log("Logged In.");

//           // const token = jwt.sign({ userId: userData.email }, secretKey); // generate a token
//           // req.session.user = userData.email;
//           // // set token in both session and cookie
//           // req.session.token = token;
//           // res.cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true, path: '/' }); // set to an hour, httponly for security and path / to be access by any route
//           // res.json({ success: true, isAuthenticated: true, user: { firstName: userData.firstName, lastName: userData.lastName, email: userData.email }, token}); // send back response in json
//           //  // Inside the /loginregister route after setting the token
//           //  console.log('Token set in session:', req.session.token);
//           //  console.log('Token set in cookie:', token);
//         return res.status(200).json({ success: true, message: 'Login successful', user: userData });
      
//       } 
//       else // passwords don't match
//       {
//         console.log("Invalid password");
//         // res.status(401).json({ success: false, isAuthenticated: false, user: null })
//         res.status(401).json({ success: false, user: null });
//       }
//     });
//   });    
// });
// serve login route using express
app.post('/login', function (req, res) {
  var username = req.body.username; // fetch username
  var password = req.body.password; // fetch password

  console.log('Request body:', req.body);
  
  console.log('Calling login for username:', username); // logging username
  model.loginModel(username, password, function(err, userData) {  // executing login query from model
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json("Internal Server Error");
    } 
    
    if (!userData) { // no user data then user is not found
      return res.status(401).json("User not found. Register first");
    }
    
    var mySavedPwd = userData.signup_password; //comparing password to login
    
    // debugging
    console.log('Input Password:', password);
    console.log('Hashed Password from Database:', mySavedPwd);
    
    bcrypt.compare(password, mySavedPwd, function(err, success) { // comparing input password and saved password in database
      console.log('Inside bcrypt.compare callback');
      console.log('Error comparing passwords:', err);
      console.log('Password comparison result:', success);
      if (err) { // error when comparing
        console.error('Error comparing passwords:', err);
        return res.status(500).json("Internal Server Error");
      }
      
      if (success) { // success comparing passwords
        console.log("Logged In.");
        return res.status(200).json({ success: true, message: 'Login successful', user: userData });
      } else { // passwords don't match
        console.log("Invalid password");
        return res.status(401).json({ success: false, user: null });
      }
    });
  });    
});


// Serve index.html for all other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});