import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './homeRoutes';
import HomeController from './homeController';

export default angular.module('app.home', [uirouter])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;