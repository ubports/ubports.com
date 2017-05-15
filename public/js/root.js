var app = angular.module("ubports", []);

app.controller("ctrl", ['$scope', '$http', function($scope) {
  $scope.error;
  $scope.toggeError = function() {
    $scope.error = !$scope.error;
  }
  $scope.test = function() {
    console.log("test");
  }
}]);

$("#mList").click(() => {
  $('#mListModal').modal('show')
});
