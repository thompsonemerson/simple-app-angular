// Incluindo o modulo
angular.module('simpleApp')


// Controller Home
.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.titulo = "Welcome ;D";
}])


// Controller Repeat
.controller('RepeatCtrl', ['$scope', function ($scope) {
	
	// Armazenando os itens em um scope array
	$scope.itens = [
		{nome: 'LG G Flex', marca: 'LG', valor: 'R$ 3.309,00'},
		{nome: 'iPhone 6', marca: 'Apple', valor: 'R$ 2.999,00'},
		{nome: 'Nokia Lumia 1020', marca: 'Nokia', valor: 'R$ 2.583,05'},
		{nome: 'Xperia Z2', marca: 'Sony', valor: 'R$ 2.298,57'},
		{nome: 'ZenFone 6', marca: 'Asus', valor: 'R$ 854,10'},
	];

}])


// Controller Firebase
.controller('FirebaseCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

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