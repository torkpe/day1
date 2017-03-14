function Student(names, courses, level){
	this.names = names;
	this.courses=courses;
	this.level=level;

	var studentname= this.names;
	if (studentname===" "){
		studentname="student name cannot be empty";
		return studentname;
	}
	if (typeof this.name==='string'){
		return this.name;
	}else{
		studentname= "name has to be of string type";
		return studentname;
	}
	if (this.level <= 300 ){
		if (this.courses > 5){
			return "required courses should not exceed 5";
		}
	}
}
module.exports= Student;