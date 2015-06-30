(function(){

	var app = angular.module('receta',[
		'ngRoute',
		'ngResource',
		'templates',
		'controllers'
	]);

	app.config(['$routeProvider',
		function($routePrivider){
			return $routePrivider.when('/',
				{	
					templateUrl: "index.html",
					controller: 'RecipesController'
				}).when('/recipes/new',
				{ 
					templateUrl: "new.html",
					controller: 'RecipesController'
				});
		}
	]);


	controllers = angular.module('controllers',[])

	controllers.controller('RecipesController',['$scope', '$routeParams', '$location', '$resource',
		function($scope, $routeParams, $location, $resource){

			$scope.search = function(keywords){
				return $location.path("/").search('keywords', keywords)
			};

			if ($routeParams.keywords){
				keywords = $routeParams.keywords.toLowerCase();
				return $scope.recipes = recipes.filter(function(recipe){
					return recipe.name.toLowerCase().indexOf(keywords) != -1
				});
			} else {
				return $scope.recipes = [];
			}
		}
	]);

	controllers.controller('MyController', ['$scope',
		function($scope){
			this.fixedName='';
			this.setFixedName = function(newName){
				this.fixedName = newName;
			};
		}
	]);





	recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  },
  {
    id: 2,
    name: 'Garlic Mashed Potatoes',
  },
  {
    id: 3,
    name: 'Potatoes Au Gratin',
  },
  {
    id: 4,
    name: 'Baked Brussel Sprouts',
  },
]

	
})();

