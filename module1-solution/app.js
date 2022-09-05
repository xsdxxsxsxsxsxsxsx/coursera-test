(function () {
'use strict';

angular.module('ItemCalculator', [])

.controller('ItemCalculatorController', ItemCalculatorController);

  ItemCalculatorController.$inject = ['$scope'];

  function ItemCalculatorController ($scope) {
  $scope.item = "";
  $scope.message = "";
  $scope.totalValue = 0;

  $scope.checkItems=function(){
  var mensaje=searchmessage($scope.totalValue);
  $scope.message=mensaje;
  function searchmessage(number){
    if($scope.item=="")
    return "Please enter data first";
    if($scope.totalValue<=3)
    return "Enjoy!";

    return "Too much!";
  }
  }

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.item);
    $scope.totalValue = totalNameValue;

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      var itemArray=string.split(',');
      return itemArray.length;
    }
  }




};


})();
