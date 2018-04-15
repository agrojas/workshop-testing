'use strict';
var Validator = require('./validator/validator.js');
var UserValidator = require('./validator/user_validator.js');


let user = {
	name: "lalo",
	lastName: "landa"
}

let validator = new UserValidator(user)

console.log(validator.validate())