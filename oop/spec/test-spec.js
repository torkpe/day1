var student =require('../app/oop');
(function (){
	'use strict';
	describe("Student Class: Create a student and define its attributes", function(){

		it("The student should have a name in string form", function(){
			var studentname = new student('');
			expect(studentname).toEqual("student name cannot be empty");
			var studentname= new Student(56789);
			expect(studentname).toEqual("name has to be of string type");
		});


	});
	describe("Should have a valid level", function(){
				it("should check if the level is valid", function(){
					var studentlevel = new student("names", "courses", 0);
					expect(studentlevel).toEqual("invalid");					
					var studentlevel = new student("names", "courses", 1000);
					expect(studentlevel).toEqual("invalid");

				});

	});
})