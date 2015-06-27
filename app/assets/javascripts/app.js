(function(){

	var app = angular.module('receta',['ngRoute']);

	app.config(['$routeProvider',
		function($routePrivider){
			return $routePrivider.when('/',
				{	
					templateUrl: "index.html",
					controller: 'indexAngController'
				}).when('/recipes/new',
				{ 
					templateUrl: "new.html",
					controller: 'newAngController'
				});
		}
	]);

	app.controller('indexAngController',function($scope){
		$scope.name='fffffffffffffffff'
	});

	app.controller('newAngController',function(){

	});

	
})();

