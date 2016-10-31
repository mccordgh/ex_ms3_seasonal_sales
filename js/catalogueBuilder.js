var Catalogue = (function() {

	var products = {};
	var categories = {};

	return {

		loadProducts: function() {
			var pLoader = new XMLHttpRequest();
			
			pLoader.open("GET", "lib/products.json");
			pLoader.send();

			pLoader.addEventListener("load", function() {
			products = JSON.parse(this.responseText);
			Catalogue.loadCategories();
			});
		},

		loadCategories: function() {
			var cLoader = new XMLHttpRequest();
			
			cLoader.open("GET", "lib/categories.json");
			cLoader.send();

			cLoader.addEventListener("load", function() {
			categories = JSON.parse(this.responseText);
			populateProduct(products.products, categories.categories);
			});
		},

		getProducts: function() {
			return products;
		},
		
		getCategories: function() {
			return categories;
		}

	};

})();