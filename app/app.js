// Definindo o modulo de nosso App
angular.module('simpleApp', [ 'ngRoute' ])

// Criando as Rotas
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

		.when('/sobre', {
			templateUrl: 'templates/sobre.html',
			controller: 'SobreCtrl'
		})

		.when('/contato', {
			templateUrl: 'templates/contato.html',
			controller: 'ContatoCtrl'
		})

		// Redirecionamento Default
		.otherwise({
			redirectTo: '/'
		});
	}
]);