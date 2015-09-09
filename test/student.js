//var assert = require('assert');
var should = require('should-http'),
	request = require('supertest');

describe('student', function() {
	var url = "http://localhost:5000";
	var studInfo = {
		'id': 9,
		'name' : 'Rom',
		'studno' : '2014-40000'
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
				res.body.should.be.an.instanceOf(Object);
				//res.body.should('name').be.type('string');
				res.body.should.have.properties({
					'id': '9',
					'name': 'Rom',
					'studno': '2014-40000'
				});
				done();
			});
		});
	});

	/*
	describe('update()', function() {

	});*/
});