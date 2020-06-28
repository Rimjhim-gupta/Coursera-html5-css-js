//Functions are First-class data types
//Functions are objects

function multiply(x,y){
	return x*y;
}
console.log(multiply(3,4));
multiply.version = "v.1.1.2";
console.log(multiply.version);

///******Function factory***********
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier*x;
	}

	return myFunc;//it return a function
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(50));


//Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
} 
 
var result = doOperationOn(5,multiplyBy3);
console.log(result);
result = doOperationOn(75, doubleAll);
console.log(result);