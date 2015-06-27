(function(){

	var app = angular.module('receta',[
		'ngRoute',
		'templates',
		'controller'
	]);

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


	controllers = angular.module('controllers',[])


	controllers.controller('RecipesController',function($scope){
		

	});

	
})();

