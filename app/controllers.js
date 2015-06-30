// Incluindo o modulo
angular.module('simpleApp')


// Controller Home
.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.titulo = "Welcome ;D";
}])


// Controller Firebase
.controller('FirebaseCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
	$scope.titulo = "Firebase";

	// Conectando com Firebase na Collection 'Equipes'
	var ref = new Firebase("https://single-app.firebaseio.com/equipes");

	// Recebendo dados
	$scope.equipes = $firebaseArray(ref);

	// Adicionando nova Equipe
	$scope.addEquipe = function() {
		$scope.equipes.$add({
			nome: $scope.nome,
			thumb: $scope.thumb
		});
		$scope.nome = "";
		$scope.thumb = "";
		Materialize.toast('Equipe Adicionada', 3000);
	};

	// Removendo Equipe
	$scope.removerEquipe = function(equipe) {
		$scope.equipes.$remove(equipe);
		Materialize.toast('Equipe Removida', 3000);
	};

}]);