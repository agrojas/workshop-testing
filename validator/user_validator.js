'use strict';
var Validator = require('./validator.js');
var StringLengthValidation = require('./validations/string_length_validation.js');


class UserValidator extends Validator {
	constructor(user){
  		let validations = [new StringLengthValidation(user.name, 20), new StringLengthValidation(user.lastName, 20)];
  		super("UserValidator",validations);
	}

	validate() {
		return super.validate()
	}
};
module.exports = UserValidator;