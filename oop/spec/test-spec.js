var Student = require('../app/oop.js');

describe("Student Class: Create a student and define its attributes", function(){

	it("The student should have a name and a department", function(){
		var tope = new Student("Tope", "Computer Science", 3);
		expect(tope.name).toEqual("Tope");
		expect(tope.dept).toEqual("Computer Science");
		expect(tope.cultist).toBe(false);
	});

  it("student should be a type of `object`, and an instance of the `Student` class", function(){
    var johnson = new Student('Johnson');
    expect(typeof johnson).toEqual(typeof {});
    expect(johnson instanceof Student).toBeTruthy();
  });

  it("every student has a 10 courses to write. ", function() {
    var dexter = new Student('Dexter', 'Law');
    expect(dexter.courses).toBe(10);
  });

  it("student gets no gradepoints until they get a grade", function() {
    var victor = new Student('Victor', 'Engineering');
    expect(victor.gradepoints).toBe(0);
    victor.getGrade("A");
    expect(victor.gradepoints).toBe(5);
  });

  it("student gets no carryover until they fail a course", function() {
    var daniel = new Student('Daniel', 'Biology');
    expect(daniel.carryovers).toBe(0);
    daniel.failCourse();
    expect(daniel.carryovers).toBe(1);
  });

  it("user should be a freshman if no level is passed as a parameter", function() {
    var temi = new Student();
    expect(temi.level).toEqual(1);
  });



});
