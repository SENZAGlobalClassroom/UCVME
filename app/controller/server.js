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

var model = require('../model/index'); 

app.use(express.static(staticPath)); // configure app to serve static files from the view directory
app.use(express.json()); // handle json and form data
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

// when i refresh any pages it cannot GET / the route
app.get('/home', function (req, res) 
{
  console.log('Home page');
});

// serve login route using express
app.get('/login', function (req, res) 
{
  console.log('Login page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// Handle POST request to /signup
app.post('/signup', function (req, res) {
  console.log('A signup attempt has been made!');
  console.log('Received data:', req.body); // Log the posted data

  

  // You can add validation and further processing here
  res.status(200).json({ message: "Signup successful!" });
});

// serve create cv route using express
app.get('/cvProcess', function (req, res) 
{
  console.log('Create CV page');
  res.sendFile(path.join(staticPath, 'index.html'));
});

// serve complete cv route using express
app.get('/CVComplete', function (req, res) 
{
  console.log('CV page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve username cv route using express
app.get('/CVUsername', function (req, res) 
{
  console.log('CV username page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve wallet route using express
app.get('/wallet', function (req, res) 
{
  console.log('Wallet page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve help route using express
app.get('/help', function (req, res) 
{
  console.log('Help page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve settings route using express
app.get('/settings', function (req, res) 
{
  console.log('Settings page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve likes route using express
app.get('/likes', function (req, res) 
{
  console.log('Likes page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
});

// serve add post route using express
app.get('/addpost', function (req, res) 
{
  console.log('Add post page');
  res.sendFile(path.join(staticPath, 'index.html')); // send index file
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

app.post('/signup', function (req, res) 
{
  console.log('Request body:', req.body);

  var userData = // user information store in userData
  {
    username: req.body.username, // firstname sent from client
    email: req.body.email, // email sent from client
    password: req.body.password, // password sent from the client
  };
  console.log('User data:', userData);

  if (!isValidName(userData.username)) // validate firstname
  {
    return res.status(400).json("Invalid username");
  } 
  else if (!isValidEmail(userData.email)) // validate email
  {
    return res.status(400).json("Invalid email address");
  } 
  else if (!isValidPassword(userData.password)) // validate password
  {
    return res.status(400).json("Invalid password format");
  }

  bcrypt.hash(userData.password, saltRounds, function(err, hash) // hash the password before storing it in the database
  {
    if (err) // error occur trying to hash the password
    {
      console.error('Error hashing password:', err);
      return res.status(500).json("Internal Server Error");
    }

    userData.password = hash; // replace the plain text password with the hashed password

    model.signupModel(userData, function(result) // execute register query
    {
      if (result.error) // error trying to register
      {
        console.error('Error during registration:', result.error);
        return res.status(500).json('Internal Server Error');
      } 
      else if (result.success) // registration successful
      {
        console.log('Registration successful.');
        // console.log('Session:', req.session);
        // console.log('Cookies:', req.cookies);

        // const token = jwt.sign({ userId: userData.email }, secretKey);// generate token using secret key
        // req.session.token = token; // set token in session
        // res.cookie('token', token, { maxAge: 60 * 60 * 6000, httpOnly: true, path: '/' }); // set token in cookies, 1 hours, http true for security, paht  can be access by any path
        // res.json({ success: true, isAuthenticated: true, user: { firstName: userData.firstName, lastName: userData.lastName, email: userData.email },  token }); // send back json response
        // console.log('Token set in session:', req.session.token); // log token in session
        // console.log('Token set in cookie:', token); // log token in cookie
      } 
      else // handle other cases if needed
      {
        console.error('Registration failed for some reason.');
        // res.status(400).json({ success: false, isAuthenticated: false, user: null });
        res.status(400).json({ success: false, user: null });
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