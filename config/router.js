var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router) {
       router.route('/students')
              .get(student.find);
              
       return router;
};

module.exports = function(router) {
       router.route('/teachers')
              .get(teacher.find)
              .post(teacher.add);
              
       return router;
};