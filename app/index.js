/// <reference path="../typings/angularjs/angular.d.ts"/>
(function () {

	var angular = require('angular');
	
	angular
		.module('app', []);
	
	angular
		.module('app')
		.controller('MainController', MainController);
		
	MainController.$inject = [];
	
	function MainController () {
		
		var vm = this;
		
		vm.message = "Booyah!";
	}
}());