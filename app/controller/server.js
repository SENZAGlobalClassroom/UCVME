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

// cv process post request
app.post('/cvprocess', function(req, res) {

  try {
    console.log('Request Body:', req.body);

    // Initialize cvData object
    const cvData = {
      page1: {},
      page2: {},
      page3: {},
      page4: {}
    };

    // Check if the request contains data for the first page
    if (req.body.cv_firstname !== undefined) {
      cvData.page1 = {
        cv_firstname: req.body.cv_firstname,
        cv_lastname: req.body.cv_lastname,
        cv_phonenumber: req.body.cv_phonenumber,
        cv_email: req.body.cv_email,
        cv_country: req.body.cv_country
      };
      console.log('Phone Number:', req.body.cv_phonenumber);

      console.log('Data for page 1 received and logged:', cvData.page1);
    }

    // Check if the request contains data for the second page
    if (req.body.cv_colour !== undefined) {
      cvData.page2 = {
        cv_colour: req.body.cv_colour
      };
      console.log('Data for page 2 received and logged:', cvData.page2);
    }

    // Check if any data for page 3 is present
    const page3Fields = ['cv_mbti', 'cv_job_title', 'cv_job_category', 'cv_start_date', 'cv_end_date', 'cv_description_work', 'cv_memory', 'cv_reference_ph_number'];
    const page3DataPresent = page3Fields.some(field => req.body[field] !== undefined);

    if (page3DataPresent) {
      cvData.page3 = {
        cv_mbti: req.body.cv_mbti,
        cv_job_title: req.body.cv_job_title,
        cv_job_category: req.body.cv_job_category,
        cv_start_date: req.body.cv_start_date,
        cv_end_date: req.body.cv_end_date,
        cv_description_work: req.body.cv_description_work,
        cv_memory: req.body.cv_memory,
        cv_reference_ph_number: req.body.cv_reference_ph_number
      };
      console.log('Data for page 3 received and logged:', cvData.page3);
    }

    // Check if the request contains data for the fourth page (video)
    // Assuming video data is handled separately

    // Send a success response indicating partial data submission
    res.status(200).json({ message: 'Partial data submitted successfully' });
    console.log('Partial data submitted successfully:', cvData);
  } catch (error) {
    console.error('Error handling CV data:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// add post post request
app.post('/addpost', function(req, res) {
  var jobPostData = {
    job_post_title: req.body.job_post_title,
    job_post_category: req.body.job_post_category,
    job_post_date: req.body.job_post_date,
    job_post_description: req.body.job_post_description
  };
  console.log('Job post data:', jobPostData);

  // Validate the presence of required fields
  if (!jobPostData.job_post_title || !jobPostData.job_post_category || !jobPostData.job_post_date || !jobPostData.job_post_description) {
    console.error('Missing required fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  model.addPostModel(jobPostData, function(result) {
    if (!result) {
      console.error('Error adding post:', err);
      return res.status(500).json({ message: 'Failed to add post. Please try again.' });
    }

    // If no error, send success response
    res.status(200).json({ message: 'Job post data submitted successfully' });
    console.log('Job post data submitted successfully:', result);
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
