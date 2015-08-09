import angular from 'angular';

class RandomNames {
	
	constructor() {
		
		this.names = ['Marciano', 'Mailman', 'Paulie', 'Tricky Dave'];
	}
	
	getName() {
		let totalNames = this.names.length;
		let rand = Math.floor(Math.random() * totalNames);
		
		return this.names[rand];
	}
	
	addNames(...names) {
		
		this.names = this.names.concat(names);
	}
}

export default angular.module('app.services', [])
	.service('randomNames', RandomNames)
	.name;