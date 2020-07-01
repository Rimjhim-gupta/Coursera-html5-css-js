//Object literal
var literalCircle= { //new object
	radius: 10,
	getArea: function () {
		console.log(this);
		var self=this;
		this.radius=30;
		console.log(this);
		console.log(self);

		var increaseRadius = function(){
			// this.radius=20; set to global object
			self.radius=20; // set to local object
		};

		increaseRadius();
		console.log(this.radius);
		console.log(this);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

//console.log(literalCircle);
console.log(literalCircle.getArea());