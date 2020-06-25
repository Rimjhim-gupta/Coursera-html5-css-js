var x;
console.log(x);/*undefined type(x is declared but it's value isn't
					set that's why it is of undefined type)*/
// console.log(y);/*error occur as undeclared this isn't undefined type)*/
if(x==undefined)
	console.log("undefined")
x=5
if(x==undefined)
	console.log("undefined")
else
	console.log("declared")
var d="global"
console.log(d)
function a(){
	var d="inside a"
	console.log(d)

	function b(){
	console.log(d)/*now b is defined inside function a, which means b's outer reference is function a variable scope. */
}
b();
}
// var b=function(){
	// console.log(d)/*it take global value as it's outer refrence is global.*/
// }
a();