// model/index.js
var signupModel = require('./signup');
var loginModel = require('./login');
var settingModel = require('./settings');

module.exports = {
    signupModel,
    loginModel,
    settingModel
};