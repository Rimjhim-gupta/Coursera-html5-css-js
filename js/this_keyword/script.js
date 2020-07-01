//function constructor
//for function constructor it is neccessary to use new keyword.
//If we forget new keyword it will show undefined because this is nothing more than a function, 
//it's just a regular JavaScript function. So, a regular JavaScript function that you're passing 10 to, 
//and it actually does not return anything. Well, when it doesn't return anything, this myCircle becomes undefined.
function Circle(radius){
	this.radius=radius;
	//it doesn't return any value.
	this.name="Circle";

	// this.getArea=
	// function () {
	// 	return Math.PI * Math.pow(this.radius, 2);
	// };
	//***we don't do this because this function is going to get executed every single time we create a new Circle.
	//There is overriding of the memory space of getArea every single time we're creating a Circle. 
	//So basically, that's wasted processing. It's not really wasted memory space, since it's going to put in the 
	//same memory space this function over and over again, but it's wasted processing. 
	//So we really should not be putting that inside of a function constructor. 
}
Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow(this.radius,2);
};
var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle.getArea());