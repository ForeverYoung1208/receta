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
				}).when('/recipes/:recipeId',
				{
	        templateUrl: "show.html",
	        controller: 'RecipeController'
        });
		}
	]);


	controllers = angular.module('controllers',[])


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

