import angular from 'angular';

function greeting () {
	
	return {
		scope: {
			name: '='
		},
		template: '<h1>Hello, {{name}}</h1>'
	};
}

export default angular.module('app.directives', [])
	.directive('greeting', greeting)
	.name;