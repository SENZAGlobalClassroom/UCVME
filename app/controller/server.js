// server file to handle get and requests from the client
const express = require("express");
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const pool = require('../model/db');

var model = require('../model/index');

const app = express();
const staticPath = path.join(__dirname, '../view/dist');

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Signup post request
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Call signup model with request information
  model.signupModel(username, email, password, (result) => {
    // If successful, create a token for the user
    if (result.success) {
      const token = jwt.sign(
        { username: result.username },
        'This_1_Is_2_A_3_Secret_4!',
        { expiresIn: '12h' }
      );

      res.status(200).json({ success: true, token: token });
    } else { // Otherwise, return the relevant error message
      res.status(401).json({ success: false, message: result.message });
    }
  });
});

// Login post request
app.post('/login', (req, res) => {
  const { email, password, rememberMe } = req.body;

  // Call to login model with email and password
  model.loginModel(email, password, (result) => {
    // If the user logged in successfully
    if (result.success) {
      // Give a token based on their remember me setting
      const expiresIn = rememberMe ? '7d' : '12h';

      const token = jwt.sign(
        { username: result.user.profile_username },
        'This_1_Is_2_A_3_Secret_4!',
        { expiresIn: expiresIn }
      );

      res.status(200).json({ success: true, token: token });
    } else { // Failed to log in
      res.status(401).json({ success: false, message: result.message });
    }
  });
});

// Settings post request for change username
app.post('/changeusername', (req, res) => {
  const { curUser, username, password } = req.body;

  // Call the settings model to verify information
  model.changeUserModel(curUser, username, password, (result) => {
    if (result.success)
      res.status(200).json({ success: true });
    else
      res.status(401).json({ success: false, message: result.message });
  });
});

// Settings post request for delete account
app.post('/deleteaccount', (req, res) => {
  const { curUser, password } = req.body;

  model.deleteAccountModel(curUser, password, (result) => {
    if (result.success)
      res.status(200).json({ success: true });
    else
      res.status(400).json({ success: false, message: result.message });
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Assign the port to the server
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});

// Graceful shutdown functionality for database connection
function gracefulShutdown() {
  pool.end().then(() => {
    console.log('Pool has been closed');
    process.exit(0);
  });
}

// If the server is killed in anyway, close the pool
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
