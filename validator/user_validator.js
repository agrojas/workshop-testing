'use strict';
var Validator = require('./validator.js');
var StringLengthValidation = require('./validations/string_length_validation.js');
var ValidationOfDeath = require('./validations/validation_of_death.js');


class UserValidator extends Validator {
	constructor(user){
  		let validations = [new StringLengthValidation(user.name, 20), new ValidationOfDeath(2000)];
  		super("UserValidator",validations);
	}

	validate() {
		return super.validate()
	}
};
module.exports = UserValidator;