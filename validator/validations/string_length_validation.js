'use strict';
var Validation = require('./validation.js');

class StringLengthValidation extends Validation {
	constructor(value, length){
  		let name = "StringLengthValidation"
		let validate = () => {return value.length <= length}
  		super(name, validate);
		this.length = length
		this.value = value
	}
	validate() {
		return super.validate()
	}
};

module.exports = StringLengthValidation;