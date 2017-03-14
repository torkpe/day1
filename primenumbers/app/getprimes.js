function getPrimes(n){
	var array =[];
    if ((n >0) &&(typeof n === 'number')){
        for (var i = 2; i <= n; i++) {
        	var isprime=true;
        	for (var j = 0; j < array.length; j++) {
        		var p = array[j];
        		if(i%p===0){
                    isprime=false;
        			break;
        		}
        		
        if(p*p > i)
        	break;
        	}
        	if (isprime)
        		array.push(i);
        }

        return array;
        }else{
            return"invalid";
        }
    }

        module.exports=getPrimes;