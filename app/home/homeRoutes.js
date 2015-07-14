routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home/home.html', //require('./home.html), //needs raw-loader
			controller: 'HomeController',
			controllerAs: 'home'
	});
}