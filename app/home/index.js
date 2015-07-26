import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './homeRoutes';
import HomeController from './homeController';
import randomNames from './../services/randomNames';
import greeting from './../directives/greetingDirective';

export default angular.module('app.home', [uirouter, randomNames, greeting])
	.config(routing)
	.controller('HomeController', HomeController)
	.name;