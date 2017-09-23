var products = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  {name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  {name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  {name: 'orange', type: 'fruit', quantity: 3, price: 5 }
 ];

// Type is 'vegetable', quatity is greater than 0, price is less than 10

products.filter(function(product) {
  return product.type === 'vegetable' 
    && product.quantity > 10
  	&& product.price < 10
});