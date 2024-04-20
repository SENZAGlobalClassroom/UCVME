// model/index.js
var signupModel = require('./signup');
var loginModel = require('./login');
var { changeUserModel, deleteAccountModel } = require('./settings');
var cvModel = require('./cvcreation');
var addPostModel = require('./addpost')

module.exports = {
    signupModel,
    loginModel,
    changeUserModel,
    deleteAccountModel,
    cvModel,
    addPostModel
};