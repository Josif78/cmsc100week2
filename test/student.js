//var assert = require('assert');
var should = require('should-http'),
	request = require('supertest');

describe('student', function() {
	var url = "http://localhost:5000";
	var studInfo = {
		'name': 'Uni',
		'studno': '2014-10000'
	};

	describe('find()', function() {
		it('retrieve all student info', function(done) {
			request(url)
			.get('/students')
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});

	describe('findOne()', function() {
		it('retrieve a specific student info', function(done) {
			request(url)
			.get('/students/1')
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				done();
			});
		});
	});

	
	describe('insert()', function() {
		it('inserts new student info', function(done) {
			request(url)
			//.get('/students')
			.post('/students')
			.send(studInfo)
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				studInfo.should.have.properties({
					'name': 'Uni', 
					'studno': '2014-10000'
				});
				done();
			});
		});
	});

	/*
	describe('update()', function() {

	});*/
});