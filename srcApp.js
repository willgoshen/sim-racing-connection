var srcApp = angular.module("srcApp", []);

srcApp.controller("titleController", function($scope) {
  $scope.title = "Sim Racing Connection";
});

srcApp.controller("srcController", function($scope, $http) {
  $http.get("./models/categories.json")
  .success(function(data) {
    $scope.categoryModel = data;
  })
  .error(function() {
    $scope.error = "Error";
  });

  $scope.welcome = "Welcome to Sim Racing Connection";
  //$scope.categoryModel = categoryModel;

});

srcApp.controller("tracksController", function($scope, $http) {
  $scope.trackType = function(type) {
    $scope.filter = type;
  }
  $http.get("./models/tracks.json")
  .success(function(data) {
    $scope.trackModel = data;
  })
  .error(function() {
    $scope.error("Error");
  });
});
