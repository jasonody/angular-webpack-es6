/// <reference path="../typings/angularjs/angular.d.ts"/>
(function () {

	var angular = require('angular');
	
	angular
		.module('app', []);
	
	angular
		.module('app')
		.controller('MainController', MainController);
		
	MainController.$inject = ['$timeout'];
	
	function MainController ($timeout) {
		
		var vm = this;
		
		vm.message = "Booyah!";
		
		$timeout(() => {
			vm.message = "ES6 success!";
		}, 1000);
	}
}());