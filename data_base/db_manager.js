
"use strict";

var sqlite3 = require('sqlite3').verbose();

class DBManager{
	constructor(){
		this.db = new sqlite3.Database('db-test.db');
		this.createTable()		
	}
	createTable() {
		this.db.run("CREATE TABLE IF NOT EXISTS regex (value TEXT)");
		this.insertRows()
	}

	insertRows() {
	    var stmt = this.db.prepare("INSERT INTO regex VALUES (?)");
	    stmt.run("^\w+@\w+\..{2,3}(.{2,3})?$")
	    stmt.finalize();
	}

	readRow() {
		return new Promise((resolve, reject) => this.db.get("SELECT * FROM regex", (err, row) => {err ? reject(err) : resolve(row)}))
	}

	closeDb() {
	    this.db.close();
	}

	getFromDb() {
	    return this.readRow();
	}
}



module.exports = DBManager;