// model/index.js
var signupModel = require('./signup');
var loginModel = require('./login');
const { changeUserModel, deleteAccountModel } = require('./settings');


module.exports = {
    signupModel,
    loginModel,
    changeUserModel,
    deleteAccountModel
};