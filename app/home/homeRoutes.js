routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			//templateUrl: 'home/home.html',
			template: require('./home.html'), //use raw-loader
			controller: 'homeController',
			controllerAs: 'home'
	});
}
