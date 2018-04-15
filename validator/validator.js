'use strict';
class Validator {
	constructor(name,validations){
		this.name = "Validator"
  		this.validations = [];		
	}

	validate() {
		let validations_results = this.validations.map(val => val.validate());
  		return {result: validations_results.reduce((v1,v2) => v1 && v2), validations_results:validations_results}
  	}
  
};
module.exports = Validator;