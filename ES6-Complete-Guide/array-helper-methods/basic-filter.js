var products = [
  {name: 'cucumber', type: 'vegetable' },
  {name: 'banana', type: 'fruit' },
  {name: 'celery', type: 'vegetable' },
  {name: 'orange', type: 'fruit' }
 ];

var filteredProducts = [];

// classic es5 for loop
for (var i = 0; i< products.lenght; i++) {
  if (products[i].type === 'fruit') {
    filteredProfducts.push(products[i]);
	}
}

filteredProducts;
// return with .filter method is key
products.filter(function(product) {
  return product.type === 'fruit';
});
