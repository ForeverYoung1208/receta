(function(){

	var app = angular.module('receta',[
		'ngRoute',
		'ngResource',
		'templates',
		'controllers',
	  'angular-flash.service',
	  'angular-flash.flash-alert-directive'		
	]);

	app.config(['$routeProvider','flashProvider','$locationProvider',
		function($routePrivider, flashProvider, $locationProvider){
	    flashProvider.errorClassnames.push("alert-danger");
	    flashProvider.warnClassnames.push("alert-warning");
	    flashProvider.infoClassnames.push("alert-info");
	    flashProvider.successClassnames.push("alert-success");
			$routePrivider
			.when('/', {	
				templateUrl: "index.html",
				controller: 'RecipesController'
			})
			.when('/recipes/new', { 
				templateUrl: "new.html",
				controller: 'RecipesController'
			})
			.when('/recipes/:recipeId', {
        templateUrl: "show.html",
        controller: 'RecipeController'
      });

	    $locationProvider.html5Mode({
	    	enabled: true,
	    	requireBase: false
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

