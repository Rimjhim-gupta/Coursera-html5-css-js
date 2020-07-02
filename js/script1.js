// String
var s="Hello"
s += "World"
// s=s+"World"  Another way to write above line
console.log(s+"!") //The difference between this line and above line is that concatenation stores in that value and in this line it is stored in s


//Arithmetic operations
console.log((5+4)/3)
console.log(undefined/3)
function test(a) {
	console.log(a+5);
}
test();//it's result is Nan(Not a number) because a isn't defined and any arithmetic operation on undefined gives NaN


//*******EQUALITY*******
var x=4,y=4;
if(x==y){
	console.log("x is equal to y")
}
else{
	console.log("x is not equal to y")
}

/****TYPE COERCION****/
x="4"
if(x==y){
	console.log("x is equal to y")
}
else{
	console.log("x is not equal to y")
}
//It's answer will be equal in this as well because console will do type coercion(convert the type to make the type to both equal)



// ********Strict equality
if(x===y){
	console.log("x is equal to y")
}
else{
	console.log("x is not equal to y")
}
//Now the answer is not equal because it first compare the type

// ******** If statement(all false)
if (false || null || undefined || "" || NaN || 0){
	console.log("This line won't ever execute");
} 
else{
	console.log("All false");
}


//*******If statement(all true)
if(true && "lll" && 1 && -1 && "false" ){
	console.log("All true");
}



// ****Best practice for {} style
//Always apply on same line
function a()//it will return undefined because there is curly brace in new line which means console will see there is nothing after return and put ; and due to this, it will return will executing remaining lines 
{
	return
	{
		name:"Rimjhim"
	};
}

function b(){
	return {
		name: "Rimjhim"
	};
}

console.log(a());
console.log(b());


//For loop
var sum=0;
for(var i=0;i<10;i++){
	console.log(i);
	sum=sum+i;
}
console.log("sum =" + sum);