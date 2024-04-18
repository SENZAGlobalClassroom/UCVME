// model/index.js
var signupModel = require('./signup');
var loginModel = require('./login');
var settingModel = require('./settings');
var cvModel = require('./cvcreation');
var addPostModel = require('./addpost')

module.exports = {
    signupModel,
    loginModel,
    settingModel,
    cvModel,
    addPostModel
};