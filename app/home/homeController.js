export default class HomeController {
	
	constructor (randomNames) {
		
		this.name = "World";
		this.randomNames = randomNames;
	}
	
	changeName () {
		
		this.name = 'fun with ES6 & Angular! Hi Andrew!!!!';
	}
	
	randomName () {
		
		this.name = this.randomNames.getName();	
	}
}

HomeController.$inject = ['randomNames'];