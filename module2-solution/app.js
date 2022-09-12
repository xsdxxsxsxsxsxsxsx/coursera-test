(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListService', ShoppingListService);;

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var list1=this;
  list1.items1 = ShoppingListService.getItemsToBuy();
  list1.Buy = function (itemIndex) {
    ShoppingListService.buy(itemIndex);
  };
  list1.isSold=function (){
    return ShoppingListService.getSold();
  }
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var list2=this;
  list2.items2 = ShoppingListService.getItemsBought();
  list2.nothing=ShoppingListService.getNothig();
  console.log(list2.nothing);
  list2.isNothing=function (){
    return ShoppingListService.getNothig();
  }
}

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {
      item_name: "Milk",
      item_quantity: "2"
    },
    {
      item_name: "Donuts",
      item_quantity: "2"
    },
    {
      item_name: "Cookies",
      item_quantity: "3"
    },
    {
      item_name: "Chocolate",
      item_quantity: "5"
    },
    {
      item_name:"Water",
      item_quantity:"1"
    }
  ];
  var itemsBought = [];
  var nothing=true;
  var sold=false;
  service.buy = function (index) {
    nothing=false;
    itemsBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index, 1);
    if(itemsToBuy.length==0){
      sold=true;
      console.log("Hola")
    }
  };
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  service.getItemsBought = function () {
    return itemsBought;
  };
  service.getSold = function () {
    return sold;
  };
  service.getNothig = function () {
    return nothing;
  };
}

})();
