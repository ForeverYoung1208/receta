
controllers = angular.module('controllers')

	controllers.controller('RecipesController',['$scope', '$routeParams', '$location', '$resource',
		function($scope, $routeParams, $location, $resource){

			$scope.search = function(keywords){
				$location.path("/").search('keywords', keywords)
			};
			
 		  Recipe = $resource('/recipes/:recipeId', { recipeId: "@id", format: 'json' })

			if ($routeParams.keywords){
				Recipe.query(
					{keywords: $routeParams.keywords}, 
					function(results){
						$scope.recipes = results
					}
				)
			} else {
				return $scope.recipes = [];
			}

			$scope.view = function (recipeId){
				$location.path("/recipes/" + recipeId);
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