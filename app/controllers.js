// Incluindo o modulo
angular.module('simpleApp')

// Controllers
.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.titulo = "Página Inicial";
}])

.controller('SobreCtrl', ['$scope', function ($scope) {
	$scope.titulo = "Sobre nós";
}])

.controller('ContatoCtrl', ['$scope', function ($scope) {
	$scope.titulo = "Fale Conosco";
}]);