var company=new Object();
company.name= "Google";
console.log(company);
// company.ceo.firstname="Sundar";  **This will show error as cann't set property to undefined as ceo is not defined and to resolve this we have to define ceo

company.ceo=new Object();
company.ceo.firstname="Sundar";
company.ceo.lastname="Pichai";
console.log("Company CEO name is:" 
	+company.ceo.firstname 
	+" " + company.ceo.lastname);

console.log(company["name"]);//can be access like this as well

// company.price of stock = 110;
//This cann't be access though dot notation because of spaces 
//so we use second method for this

company["price of stock"]=110;
console.log("Stock price:" + company["price of stock"]);

// can also be used as
var stockprice ="price of stock";
company[stockprice]=110;
console.log("Stock price:" + company[stockprice]);



//Better way of creating objects
//Object literal

var google={
	name: "Google",//comma after name value pair
	ceo:{//new object
		firstname: "Sundar",
		lastname: "Pichai"
	},
	"price of stock": 110
};

console.log(google);