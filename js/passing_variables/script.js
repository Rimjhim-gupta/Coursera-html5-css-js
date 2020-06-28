////Call by value
// var a=7;
// var b=a;
// console.log("a:" + a);
// console.log("b:" + b);

// b=5;
// console.log("after b update");
// console.log("a:" + a);
// console.log("b:" + b);


////Call by refrence
var a = { x :7 };
var b = a;
console.log(a);
console.log(b);

b.x=5;
console.log("after b.x update");
console.log(a);
console.log(b);



//Pass by value
function changePrimitive(primvalue){
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primvalue);

	primvalue = 5;
	console.log("after:");
	console.log(primvalue);
}

var value =7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);


//Pass by refrence
function changeObjective(objvalue){
	console.log("in changeObjective...");
	console.log("before:");
	console.log(objvalue);

	objvalue.x = 5;
	console.log("after:");
	console.log(objvalue);
}

var value = { x: 7};
changeObjective(value);
console.log("after changeObjective, orig value:");
console.log(value);