var divMain = document.getElementById("mainDiv");
var selectMain = document.getElementById("selectMain");

selectMain.addEventListener("change", function(event) {
	applyDiscount(event, selectMain.value);
});

Catalogue.loadProducts();

function populateProduct(products, categories) {

	products.forEach(function (item) {
		divMain.innerHTML += `<div id="divProduct${item.id}" class="productDiv">${item.name}<br>Category: ${categories[(item.category_id - 1)].name}<hr>$<price>${item.price}</price></div>`;

	});
}

function applyDiscount(event, discount) {
	var products = Catalogue.getProducts().products;
	var categories = Catalogue.getCategories().categories;
	var myCategory = 0;
	var myDiscount = 0;

	categories.forEach( function(item, index) {
		if (categories[index].season_discount === discount) {
			myDiscount = categories[index].discount;
			myCategory = categories[index].id;
		}
		
	});
	products.forEach( function(item, index) {
			var myDiv = document.getElementById(`divProduct${index}`);
			var priceEl = myDiv.lastChild;
			var originalPrice = products[index].price;
		if (products[index].category_id === myCategory){
			priceEl.innerHTML = (originalPrice - (originalPrice * myDiscount)).toFixed(2);
		} else {
			priceEl.innerHTML = originalPrice;
		}
});
}


