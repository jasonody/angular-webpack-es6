import angular from 'angular';

class RandomNames {
	
	constructor() {
		
		this.names = ['Jason', 'Jon', 'Val', 'Fiona'];
	}
	
	getName() {
		let totalNames = this.names.length;
		let rand = Math.floor(Math.random() * totalNames);
		
		return this.names[rand];
	}
}

export default angular.module('app.services', [])
	.service('randomNames', RandomNames)
	.name;