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
  list1.sold=ShoppingListService.sold;
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var list2=this;
  list2.items2 = ShoppingListService.getItemsBought();
  list2.nothing=ShoppingListService.nothing;
}

function ShoppingListService() {
  var service = this;
  var nothing=true;
  var sold=false;
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

  service.buy = function (index) {
    itemsBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index, 1);
  };
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
