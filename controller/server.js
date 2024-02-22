// server file to handle get and requests from the client
const express = require("express");// using express js to handle these requests
// const session = require('express-session'); // storing session using express session
// const cors = require("cors"); // using corc to ensure both client and server handle on localhost:8080
const path = require('path'); // set path to serve static files
// const bcrypt = require('bcrypt'); // using bcrypt for security when storing passwords
// const cookieParser = require('cookie-parser'); // using cookie parser to use cookies for user sessions
// const jwt = require('jsonwebtoken'); // using jsonwebtoken to use token for user authentication for private access

// const saltRounds = 10; // salt round set to 10 for hashing password
// const secretKey = process.env.JWT_SECRET || 'extra secret key'; // use environment varibale for secret key for token
// const sessionSecret = process.env.SESSION_SECRET || 'keyboard cat'; // use environment variable for secret key for session
const app = express(); // set app as express js
const indexPath = path.join(__dirname, '../view/build', 'index.html'); // set index path to index.html in view directory

// queries in /model for connecting with the database and implement CRUD
// var model1 = require('../model/select'); //
// var model2 = require('../model/register');
// var model3 = require('../model/login');
// var model4 = require('../model/updatePassword');
// var model5 = require('../model/deleteAccount');

app.use(express.static(path.join(__dirname, '../view/build'))); // configure app to serve static files from the view directory
app.use(express.json()); // handle json and form data
app.use(express.urlencoded({ extended: true })); 
// app.use(cookieParser()); // set cookie

// app.use( // initialise session
//   session({
//     secret: sessionSecret, // set secret key
//     resave: false, // set false to not store data
//     saveUninitialized: false, // set false for doesnt store data
//     cookie: { // set cookie
//       maxAge: 60 * 60 * 6000, // expire in 6 hours
//       secure: false, 
//       httpOnly: true, // http only for security
//       sameSite: 'strict', // strict for security
//     },
//   })
// );

app.listen(8080, function() // set app listen on port 8080
{
  console.log("port on 8080");
});

// serve react for home route using express
app.get('/home', function (req, res) 
{
  console.log('Home page');
  res.sendFile(indexPath); // send index file
});

// using express to handle login page
app.get('/login', function (req, res) 
{
  console.log('Login page');
  res.sendFile(path.join(__dirname, '../view//build', 'index.html'));
});

// using express to handle registration page
app.get('/registration', function (req, res) 
{
  console.log('Registration page');
  // res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON
  res.sendFile(path.join(__dirname, '../view//build', 'index.html'));
});

// serve react for updatepassword route using express
// app.get('/updatepassword', function(req, res) 
// {
//   console.log('Update password page');
//   res.sendFile(indexPath); // send index file
// });

// serve react for updatepassword route using express
// app.get('/deleteaccount', function(req, res) 
// {
//   console.log('Delete account page');
//   res.sendFile(indexPath); // send index file
// });

// serve react for dashboard route using express
// app.get('/dashboard', function(req, res) {
//   console.log('Dashboard page');
//   res.sendFile(indexPath); // send index file
// });

// function isValidName(value) // function to validate name as strings when registering
// { 
//   const nameRegex = /^[A-Za-z\s]+$/; // letters only
//   return nameRegex.test(value);
// }

// function isValidPassword(password) // function to validate password when registering
// {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/; // password must contain at least one lowercase letter, one uppercase letter, one number, and one special character
//   return passwordRegex.test(password);
// }

// function isValidEmail(email) // function to validate email format
// {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // must contain @ .
// }

// handle registrating account
// app.post("/registration", function (req, res)
// {
//   console.log("Registration route called");
//   console.log("Received data:", req.body);
//   // Destructure the expected keys from req.body
//   var userData = 
//   {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     account_password: req.body.password, // Assuming password is sent from the client
//   };

//   if (typeof userData.firstName !== 'string')
//   {
//     return res.status(400).send("Invalid first name");
//   }
//   else if (typeof userData.lastName !== 'string')
//   {
//     return res.status(400).send("Invalid last name");
//   }
//   else if (!isValidEmail(userData.email))
//   {
//     return res.status(400).send("Invalid email address");
//   }
//   else if (!isValidPassword(userData.account_password))
//   {
//     return res.status(400).send("Invalid password format");
//   }

//   // Hash the password before storing it in the database
//   bcrypt.hash(userData.account_password, saltRounds, function(err, hash) 
//   {
//     if (err)
//     {
//       console.error('Error hashing password:', err);
//       return res.status(500).send("Internal Server Error");
//     }

//     // Replace the plain text password with the hashed password
//     userData.account_password = hash;

//     model2.register(userData, function (result)
//     {
//       if (result.error) 
//       {
//         console.error('Error during registration:', result.error);
//         res.status(500).send('Internal Server Error');
//       }
//       else 
//       {
//         res.send(result);
//       }
//     });
//   });
// });

// // handle login 
// app.post("/login", function(req, res)
// {
//   var email = req.body.email;
//   var password = req.body.password;

//   if (!email) 
//   {
//     console.error('Email is missing');
//     return res.status(400).send("Email is required");
//   }
//   else if (!password)
//   {
//     console.error('Password is missing');
//     return res.status(400).send("Password is required");
//   }

//   model3.login(email, function(err, user) 
//   {
//     if (err) 
//     {
//       console.error('Error fetching user:', err);
//       return res.status(500).send("Internal Server Error");
//     }
//     if (!user) 
//     {
//       return res.status(401).send("User not found. Register first");
//     }

//     var mySavedPwd = user.account_password;

//     // debugging
//     console.log('Input Password:', password);
//     console.log('Hashed Password from Database:', mySavedPwd);

//     // comparing input password and saved password in db
//     bcrypt.compare(password, mySavedPwd, function(err, result) 
//     {
//       if (err) 
//       {
//         console.error('Error comparing passwords:', err);
//         return res.status(500).send("Internal Server Error");
//       }
//       if (result) 
//       {
//         // Passwords match
//         console.log("Logged In.");
//         req.session.user = user.email;
//         // res.send("Welcome, " + user.firstname);
//         res.json({ success: true, redirect: "/dashboard" });
//       } 
//       else 
//       {
//           // Passwords don't match
//           console.log("Invalid password");
//           res.status(401).send("Invalid password");
//       }
//     });
//   });
// });

// handle post request for login and register
// app.post("/loginregister", function(req, res) 
// {
//   console.log("Login/registration route called");
//   console.log("Received data:", req.body);

//   if ('firstName' in req.body && 'lastName' in req.body) // check if request contains firstName and lastName fields to identify login or register
//   {
//     var userData = // user information store in userData
//     {
//       firstName: req.body.firstName, // firstname sent from client
//       lastName: req.body.lastName, // lastname sent from client
//       email: req.body.email, // email sent from client
//       account_password: req.body.password, // password sent from the client
//     };
//     console.log('User data:', userData);

//     if (!isValidName(userData.firstName)) // validate firstname
//     {
//       return res.status(400).json("Invalid first name");
//     } 
//     else if (!isValidName(userData.lastName)) // validate last name
//     {
//       return res.status(400).json("Invalid last name");
//     } 
//     else if (!isValidEmail(userData.email)) // validate email
//     {
//       return res.status(400).json("Invalid email address");
//     } 
//     else if (!isValidPassword(userData.account_password)) // validate password
//     {
//       return res.status(400).json("Invalid password format");
//     }

//     bcrypt.hash(userData.account_password, saltRounds, function(err, hash) // hash the password before storing it in the database
//     {
//       if (err) // error occur trying to hash the password
//       {
//         console.error('Error hashing password:', err);
//         return res.status(500).json("Internal Server Error");
//       }

//       userData.account_password = hash; // replace the plain text password with the hashed password

//       model2.register(userData, function(result) // execute register query
//       {
//         if (result.error) // error trying to register
//         {
//           console.error('Error during registration:', result.error);
//           return res.status(500).json('Internal Server Error');
//         } 
//         else if (result.success) // registration successful
//         {
//           console.log('Registration successful.');
//           console.log('Session:', req.session);
//           console.log('Cookies:', req.cookies);

//           const token = jwt.sign({ userId: userData.email }, secretKey);// generate token using secret key
//           req.session.token = token; // set token in session
//           res.cookie('token', token, { maxAge: 60 * 60 * 6000, httpOnly: true, path: '/' }); // set token in cookies, 1 hours, http true for security, paht  can be access by any path
//           res.json({ success: true, isAuthenticated: true, user: { firstName: userData.firstName, lastName: userData.lastName, email: userData.email },  token }); // send back json response
//           console.log('Token set in session:', req.session.token); // log token in session
//           console.log('Token set in cookie:', token); // log token in cookie
//         } 
//         else // handle other cases if needed
//         {
//           console.error('Registration failed for some reason.');
//           res.status(400).json({ success: false, isAuthenticated: false, user: null });
//         }
//       });
//     });
//   } 
//   else if (req.body.email && req.body.password) // if user logins
//   {
//     var email = req.body.email; // fetch email
//     var password = req.body.password; // fetch password

//     if (!email) // if email not entered, displays message
//     {
//       console.error('Email is missing');
//       return res.status(400).json("Email is required");
//     } 
//     else if (!password) // if password not entered, displays message
//     {
//       console.error('Password is missing');
//       return res.status(400).json("Password is required");
//     }

//     console.log('Calling model3.login for email:', email); // loggin email
//     model3.login(email, password, function(err, userData)  // executing login query from model
//     {
//       if (err) // error executing the query
//       {
//         console.error('Error fetching user:', err);
//         return res.status(500).json("Internal Server Error");
//       }
//       if (!userData) // no user data then user is not found
//       {
//         return res.status(401).json("User not found. Register first");
//       }
    
//       var mySavedPwd = userData.account_password; //comparing password to login
    
//       // debugging
//       console.log('Input Password:', password);
//       console.log('Hashed Password from Database:', mySavedPwd);
    
//       bcrypt.compare(password, mySavedPwd, function(err, success) // comparing input password and saved password in database
//       {
//         console.log('Inside bcrypt.compare callback');
//         console.log('Error comparing passwords:', err);
//         console.log('Password comparison result:', success);
//         if (err) // error when comparing
//         {
//           console.error('Error comparing passwords:', err);
//           return res.status(500).json("Internal Server Error");
//         }
//         if (success) // success comparing passwords
//         {
//           console.log("Logged In.");

//           const token = jwt.sign({ userId: userData.email }, secretKey); // generate a token
//           req.session.user = userData.email;
//           // set token in both session and cookie
//           req.session.token = token;
//           res.cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true, path: '/' }); // set to an hour, httponly for security and path / to be access by any route
//           res.json({ success: true, isAuthenticated: true, user: { firstName: userData.firstName, lastName: userData.lastName, email: userData.email }, token}); // send back response in json
//            // Inside the /loginregister route after setting the token
//            console.log('Token set in session:', req.session.token);
//            console.log('Token set in cookie:', token);
//         } 
//         else // passwords don't match
//         {
//           console.log("Invalid password");
//           res.status(401).json({ success: false, isAuthenticated: false, user: null });
//         }
//       });
//     });    
//   }
//   else // where both login and registration failed
//   {
//     console.error('Invalid login/registration request. Missing required fields.');
//     return res.status(400).json("Invalid request");
//   }
// });

// api for dashboard handling post request
// app.post('/dashboard', (req, res) => 
// {
//   console.log('User Session:', req.session.user);
//   console.log('Request Body:', req.body);

//   if (req.session.token || req.body.registration) // check if there is a user session
//   {
//     const decodedToken = jwt.verify(req.session.token, secretKey); // verify token and secret key from jwt
//     const userId = decodedToken.userId;// extract user ID from the token
  
//     model1.select(userId, function (result) // fetch and send user data from select query
//     {
//       console.log('Result from model1.select:', result);  // log the result of query

//       if (result) // if result present
//       {
//         const { firstName, lastName, email } = result; // initialise result to include firstname, lastname and email

//         res.setHeader('Content-Type', 'application/json'); // send the header of data
//         res.json({ status: 'success', user: { firstName, lastName, email } }); // send back to client specific user data with status of succ
//       } 
//       else 
//       {
//         res.status(404).json({ error: 'User data not found' }); // if there is no result then user is not found
//       }
//     });
//   } 
//   else // if there is no user session, not logged in
//   {
//     res.status(401).json({ status: 'redirect', redirectUrl: '/loginregister', error: 'Unauthorized access' }); // redirect to login if no user session
//   }
// });

// post request for logging out
// app.post("/logout", function (req, res) 
// {
//   console.log("Logout requested");
//   req.session.destroy((err) => // destroy session
//   {
//     if (err) // error trying to destory session
//     {
//       console.log("Error trying to destroy the session: ", err);
//       res.status(500).json("Internal Server Error");
//       return;
//     }
//     res.clearCookie('token'); // clear cookie and token
//     res.json("You have been logged out.");
//   });
// });

// api route for updating password
// app.post("/updatepassword", function (req, res) 
// {
//   console.log('Request Body:', req.body); // log the entire request body

//   var email = req.session.user; // email based on user session
  
//   console.log('New Password Value:', req.body.newPassword); // log the new password for debugging

//   model4.updatePassword(email, req.body.newPassword, function (err, result) // updating password
//   {
//     if (err) // if error raises
//     {
//       console.error('Error changing password: ', err);
//       res.status(500).send('Internal Server Error');
//     } 
//     else // no error
//     {
//       if (result && result.success) // checking if the result indicates success
//       {
//         console.log('Password changed successfully.');
//         res.send(result);
//       } 
//       else // if unsuccessful
//       {
//         console.error('Error deleting account. User not found.');
//         res.status(404).send('User not found');
//       }
//     }
//   });
// });

// using express to handle post request for deleting account
// app.post("/deleteaccount", function (req, res) 
// {
//   var email = req.session.user; // session for user

//   model5.deleteAccount(email, function (err, result) // call the delete account query from my model
//   {
//     if (err) // if error occurs
//     {
//       console.error('Error deleting account:', err);
//       res.status(500).send('Internal Server Error');
//     } 
//     else // no error when executing delete query
//     {
//       if (result && result.success) // check if the result indicates success
//       {
//         console.log('Account deleted successfully.');
//         res.send(result);
//       } 
//       else // if unsuccessful
//       {
//         console.error('Error deleting account. User not found.');
//         res.status(404).send('User not found');
//       }
//     }
//   });
// });

// route to serve react undefined route
// app.get('*', function(req, res) 
// {
//   res.sendFile(indexPath);
// });