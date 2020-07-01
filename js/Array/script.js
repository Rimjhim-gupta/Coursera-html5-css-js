//ARRAYS
var array= new Array();
array[0]="Rimjhim";
array[1]=3;
array[2]=function (name) {
	console.log("Hello " + name);
};

array[3]={course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
// console.log(array[2]()); return undefined as we pass no value to it
array[2]("World");
array[2](array[0]);
console.log(array[3].course);



//short hand array creation
var names = ["ram","ravan","seeta"];
console.log(names);

for(var i=0;i< names.length; i++){
	console.log(names[i]);
}

names[100] = "geeta";
for(var i=0;i< names.length; i++){
	console.log(names[i]);
}



var names2=["ram","ravan","seeta"];

var myobj={
	name:"Ri",
	course:"HTML/CSS/JS",
	platform: "Coursera"
};
for(var property in myobj) {
	console.log(property+": "+myobj[property]);
}

for(var name in names2){
	console.log(names[name]);
}

names2.greeting="Hi!";
for(var name in names2){
	console.log(names2[name]);
}

