function Student(name, department, level=1){
	this.name = name;
	this.dept = department;
	this.level = level;
	this.carryovers = 0;
	this.gradepoints = 0;
}

Student.prototype = {
	cultist: false,
	courses : 10,
	failCourse: function(){
		this.carryovers += 1;
	},

	laptopType: function(){
		if (this.dept === "Computer Science") return "Mac";
		return "Windows";
	},

	isGraduate: function(){
		if (this.level >= 5) return true;
		return false;
	},
	
	getGrade: function(grade){
		if (grade = "A"){
			this.gradepoints += 5;
		} else if (grade = "B"){
			this.gradepoints += 4;
		} else if (grade = "C"){
			this.gradepoints += 3;
		} else if (grade = "D"){
			this.gradepoints += 2;
		} else if (grade = "E"){
			this.gradepoints += 1;
		} else {
			return gradepoints;
		}

	}
};

module.exports = Student;