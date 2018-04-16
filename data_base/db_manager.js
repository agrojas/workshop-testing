
"use strict";
class DBManager{
	constructor(){
		var sqlite3 = require('sqlite3').verbose();
		this.db = new sqlite3.Database(':memory:', this.createTable);		
	}
	createTable() {
	    console.log("createTable lorem");
	    this.db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)", this.insertRows);
	}

	insertRows() {
	    console.log("insertRows Ipsum i");
	    var stmt = this.db.prepare("INSERT INTO lorem VALUES (?)");

	    for (var i = 0; i < 10; i++) {
	        stmt.run("Ipsum " + i);
	    }

	    stmt.finalize(this.readAllRows);
	}

	readAllRows() {
	    console.log("readAllRows lorem");
	    this.db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
	        rows.forEach(function (row) {
	            console.log(row.id + ": " + row.info);
	        });
	        closeDb();
	    });
	}

	closeDb() {
	    console.log("closeDb");
	    this.db.close();
	}

	getFromDb() {
	    this.readAllRows();
	}
}



module.exports = DBManager;