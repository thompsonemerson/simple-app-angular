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