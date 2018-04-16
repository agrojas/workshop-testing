'use strict';
var Validation = require('./validation');
var DBManager = require('../../data_base/db_manager');

class ValidationWithDbDependencies extends Validation {
	constructor(){
  		let name = "ValidationWithDbDependencies"
		
		let validate = () => {
			// Depende de la db
			let db_manager  = new DBManager()
			db_manager.getFromDb();	
		}
  		super(name, validate);
	}
	validate() {
		return super.validate()
	}
};

module.exports = ValidationWithDbDependencies;