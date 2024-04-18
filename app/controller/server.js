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
const staticPath = path.join(__dirname, '../view/dist'); // set index path to index.html in view directory
const saltRounds = 10; // salt round set to 10 for hashing password
const jwt = require('jsonwebtoken'); // JWT library for cookies
const { Pool } = require('pg'); // PostgreSQL client library

var model = require('../model/index'); 

app.use(express.static(staticPath)); // configure app to serve static files from the view directory
app.use(express.json()); // handle json and form data
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  model.signupModel(username, email, password, (result) => {
    if (result.success) {

      // User has signed in, give them a short cookie
      const token = jwt.sign(
        { username: result.username }, // Payload username
        'This_1_Is_2_A_3_Secret_4!', // Secret key, hardcoded for demonstration purposes
        { expiresIn: '12h' }
      );

      res.status(200).json({ success: true, token: token });
    } else {
      res.status(401).json({ success: false, message: result.message });
    }
  });
});


app.post('/login', (req, res) => {
  const { email, password, rememberMe} = req.body;

  model.loginModel( email, password, (result) => {
    if (result.success) {
      // Set cookie expiration time based on if the user selected remember me
      const expiresIn = rememberMe ? '7d' : '12h'; 

      // User has been authenticated, create a cookie
      const token = jwt.sign(
        { username: result.user.profile_username }, // Payload username
        'This_1_Is_2_A_3_Secret_4!', // Secret key, hardcoded for demonstration purposes
        { expiresIn: expiresIn }
      );


      res.status(200).json({ success: true, token: token });
    } else {
      res.status(401).json({ success: false, message: result.message });
    }
  });
})

// Serve index.html for all other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});