import 'bootstrap/dist/css/bootstrap.css';
//var angular = require('angular');
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './home';

angular
	.module('app', [uirouter, home]);

angular
	.module('app')
	.config(routing);