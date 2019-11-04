(function () {
	'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope){
  	$scope.lunch_list = "";
  	
  	$scope.checkEntry = function() {
  		var list_length = $scope.lunch_list.split(" ").length;

  		if ($scope.lunch_list === ""){
  			$scope.message = "Please enter data first";
  		} else if (list_length < 3){
  			$scope.message = "Enjoy!";
  		} else {
  			$scope.message = "Too much!";
  		}
  	}
  });

})();
