
var getPrimes=require('../app/getprimes');

(function() { 
 'use strict';  
 describe('Return the prime numbers from 0 to n: ', function () {   
 describe('Return the prime numbers in an array `[]`', function () {     
  it('should return [] for [1]', function () {       
   expect(getPrimes(1)).toEqual([]);      });     
 it('should return [2,3,5] for [6]', function () {        
 	expect(getPrimes(6)).toEqual([2,3,5]);      });      
 it('should return [2,3,5,7] for [10]', function () {        
 	expect(getPrimes(10)).toEqual([2,3,5,7]);      });   
    });    });
 describe('Return error message for invalid input', function () {      
 	 it('should return `undefined` for `-5`', function () {        
 	expect(getPrimes(-5)).toEqual('invalid');      });   
 it('should return `invalid` for 0', function () {        
 	expect(getPrimes(0)).toEqual('invalid');      });   
 it('should return `invalid` for `str`', function () {        
 	expect(getPrimes('str')).toEqual('invalid');      });    });   })
();
