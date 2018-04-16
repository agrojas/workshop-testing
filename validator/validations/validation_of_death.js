'use strict';
var Validation = require('./validation');

class ValidationOfDeath extends Validation {
	constructor(timeout){
  		let name = "ValidationOfDeath"
		let validate = () => {setTimeout(timeout);}
  		super(name, validate);
	}
	validate() {
		return super.validate()
	}
};

module.exports = ValidationOfDeath;