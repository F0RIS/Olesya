function Circle(r) {
	this.r = r;
	
	this.countS = function(){
		return Math.PI * (r*r);
	}
}

function Triangle(a, h) {
	this.a = a;
	this.h = h;
	
	this.countS = function(){
		return 1/2*a*h;
	}
}

console.log(new Circle(2).countS());
console.log(new Triangle(2,2).countS());

var figures = [new Circle(2), new Circle(3), new Triangle(2,2), new Triangle(2,4), new Triangle(2,5)]
var avg; 
figures.forEach(function(item, i, figures){
	
	avg += (item.countS);
	
	//console.log(item+" "+i);
});
console.log(avg/5);