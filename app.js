(function(){
	// Product
	var gem =  {name:'Azurite', price:2.95};
	// Add a new module
	var app = angular.module('gemStore',[]);
	// Add a controller for functionality
	app.controller("StoreController", function(){
		this.product = gem;
	});

})();
