(function(){
	// Product
	var gems =  [
					{name:'Azurite', price:2.95, canPurchase:true, soldOut:false, icon: 'images/gem-02.gif'},
					{name:'BloodStone', price:3.95, canPurchase:true, soldOut:false, icon: 'images/gem-01.gif'},
					{name:'Zircon', price:4.00, canPurchase:true, soldOut:false, icon: 'images/gem-06.gif'}
			   ];
	// Add a new module
	var app = angular.module('gemStore',[]);
	// Add a controller for functionality
	app.controller("StoreController", function(){
		this.products = gems;
	});

})();
