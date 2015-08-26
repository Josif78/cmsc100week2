/*exports.find = function(req, res) {
	res.send('Pururut~');
};*/

var db = require(__dirname + '/../lib/mysql');

exports.find = function(req, res, next) {
	db.query("select * from student", function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};

exports.findOne = function(req, res, next) {
	db.query("select *from student where id = ?", [req.params.id], function(err, rows) {
		if(err) return next(err);
		if(rows.length === 0) {
			res.status(404).send("Student Not Found");
		}
		else {
			res.send(rows[0]);
		}
	});
};

exports.insert = function(req, res, next) {
	db.query("insert into student(studno, name) values (?,?)", [req.body.studno, req.body.name], function(err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};

exports.update = function(req, res, next) {
	db.query("update student set ? where id = ?", [req.body, req.params.id], function(err, next) {
		if(err) return next(err);
		if(rows.length === 0) {
			res.status(404).send("Student Not Found");
		}
		else {
			res.send(rows[0]);
		}
	});
};

exports.remove = function(req, res, next) {
	db.query("delete from student where id = ?", [req.params.id], function(err, rows) {
		if(err) return next(err);
		if(rows.length === 0) {
			res.status(404).send("Student Not Found");
		}
		else {
			res.send(rows[0]);
		}
	});
};