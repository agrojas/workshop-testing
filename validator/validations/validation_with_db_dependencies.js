'use strict';
var Validation = require('./validation');
var DBManager = require('../../data_base/db_manager');

class ValidationWithDbDependencies extends Validation {

	constructor(email){
  		let name = "ValidationWithDbDependencies"
		let db_manager  = new DBManager()
		let validate = async () => {
			let regexValue = await db_manager.readRow()
			let regex = new RegExp(regexValue)
			return regex.test(email);
		}
  		super(name, validate);
	}
	validate() {
		return super.validate()
	}
};

module.exports = ValidationWithDbDependencies;