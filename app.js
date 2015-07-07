(function(){
	// Product
	var gems =  [
				{name:'Azurite', price:2.95, canPurchase:true, soldOut:true},
				{name:'BloodStone', price:3.95, canPurchase:true, soldOut:false},
				{name:'Zircon', price:4.00, canPurchase:true, soldOut:false}
			   ];
	// Add a new module
	var app = angular.module('gemStore',[]);
	// Add a controller for functionality
	app.controller("StoreController", function(){
		this.products = gems;
	});

})();
