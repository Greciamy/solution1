(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
  $scope.send = function () {
    var lunch =  $scope.name;
    var splits = lunch.split(',');
    var length = splits.length;
    var number = 0;
    var food = 0;
    for (var i=0; i < length; i++) {
      if (splits[i] === "") {
        number = number + 1;
      }
      else {
        food = food + 1;
      }
    };
    if (food<=3) {
      $scope.answer = "Enjoy";
      $scope.myStyle={
        color:"green"
      }
    }
    else {
      $scope.answer = "Too much!";
      $scope.myStyle={
        color:"red"
      }
    }
 }
}
})();
