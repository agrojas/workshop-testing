'use strict';

class Validation {
	constructor(name, functionToValidate){
		this.name = name
  		this.functionToValidate = functionToValidate	
	}

	validate() {
		return this.functionToValidate()	
	}
}
module.exports = Validation;