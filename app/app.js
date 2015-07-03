// Definindo o modulo de nosso App
angular.module('simpleApp', [ 'ngRoute', 'firebase' ])

// Criando as Rotas
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

		.when('/repeat', {
			templateUrl: 'templates/repeat.html',
			controller: 'RepeatCtrl'
		})

		.when('/filter', {
			templateUrl: 'templates/filter.html',
			controller: 'RepeatCtrl'
		})

		.when('/firebase', {
			templateUrl: 'templates/firebase.html',
			controller: 'FirebaseCtrl'
		})

		// Redirecionamento Default
		.otherwise({
			redirectTo: '/'
		});
	}
]);