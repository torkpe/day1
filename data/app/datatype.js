function dataTypes(vary){
	if ((vary=== null)||(vary=== undefined)){
		return "no value";
	}

	if ((typeof vary)==="string"){
		var vary1= vary.length;
		return vary1;
	}else if (typeof vary=='number'){
		if (vary < 100){
			return "less than 100";
		}else if (vary > 100){
			return "more than 100";
		}
		else if (vary ==100){
			return "equal to 100";
		}
	}else{

	}
	if ((typeof vary)==='boolean'){
		return vary;
	}else{

	}
	if ((Array.isArray(vary))){
		if (((vary.length) === 0) && (vary===[])){
			return "undefined";
					
		}else{
		
			return vary[2];	

		
		}
	}
	if ((typeof vary)=='function'){
		return "called callback";
	}
}

module.exports= dataTypes;
