// server file to handle get and requests from the client
const express = require("express");// using express js to handle client requests
const path = require('path'); // set path to serve static files
const app = express(); // set app as express js
const indexPath = path.join(__dirname, '../view/build', 'index.html'); // set index path to index.html in view directory

app.use(express.static(path.join(__dirname, '../view'))); // configure app to serve static files from the view directory
app.use(express.json()); // handle json and form data
app.use(express.urlencoded({ extended: true })); 

app.listen(8080, function() // set app listen on port 8080
{
  console.log("port on 8080");
});

// serve home route using express
app.get('/home', function (req, res) 
{
  console.log('Home page');
  res.sendFile(indexPath); // send index file
});

// serve login route using express
app.get('/login', function (req, res) 
{
  console.log('Login page');
  res.sendFile(indexPath); // send index file
});

// serve register route using express
app.get('/register', function (req, res) 
{
  console.log('Register page');
  res.sendFile(indexPath); // send index file
});

// serve create cv route using express
app.get('/createcv', function (req, res) 
{
  console.log('Create CV page');
  res.sendFile(indexPath); // send index file
});

// serve cv route using express
app.get('/cv', function (req, res) 
{
  console.log('CV page');
  res.sendFile(indexPath); // send index file
});

// serve saved cv route using express
app.get('/savedcv', function (req, res) 
{
  console.log('Saved CV page');
  res.sendFile(indexPath); // send index file
});

// serve account route using express
app.get('/account', function (req, res) 
{
  console.log('Account page');
  res.sendFile(indexPath); // send index file
});

// post job route using express
app.get('/postjob', function (req, res) 
{
  console.log('Post job page');
  res.sendFile(indexPath); // send index file
});

// settings route using express
app.get('/settings', function (req, res) 
{
  console.log('Settings page');
  res.sendFile(indexPath); // send index file
});