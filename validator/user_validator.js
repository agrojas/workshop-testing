'use strict';
var Validator = require('./validator');
var StringLengthValidation = require('./validations/string_length_validation');
var ValidationOfDeath = require('./validations/validation_of_death');
var ValidationWithDbDependencies = require('./validations/validation_with_db_dependencies');


class UserValidator extends Validator {
	constructor(user){
  		let validations = [ new ValidationWithDbDependencies(user.email),new StringLengthValidation(user.name, 20), new ValidationOfDeath(2000)];
  		super("UserValidator",validations);
	}

	validate() {
		return super.validate()
	}
};
module.exports = UserValidator;