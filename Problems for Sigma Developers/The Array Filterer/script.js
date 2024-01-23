// function filterProducts(products, filterCriterion) {
//     // Use the filter method to create a new array with products that match the filter criterion
//     const filteredProducts = products.filter(product => {
//       // Customize this condition based on your specific filter criterion
//       // For example, let's assume the criterion is to filter by product category
//       return product.category === filterCriterion;
//     });
  
//     return filteredProducts;
//   }
  
//   // Example usage
//   const allProducts = [
//     { id: 1, name: 'Laptop', category: 'Electronics' },
//     { id: 2, name: 'T-shirt', category: 'Apparel' },
//     { id: 3, name: 'Headphones', category: 'Electronics' },
//     { id: 4, name: 'Running Shoes', category: 'Footwear' },
//   ];
  
//   const filteredProducts = filterProducts(allProducts, 'Electronics');
//   console.log(filteredProducts);
  
// function calculateTotal(cart) {
//   // Use the reduce method to calculate the total cost
//   const totalCost = cart.reduce((accumulator, product) => {
//     // Calculate the cost for each product (price * quantity)
//     const productCost = product.price * product.quantity;

//     // Add the product cost to the accumulator
//     return accumulator + productCost;
//   }, 0); // Initialize accumulator to 0

//   return totalCost;
// }

// // Example usage
// const shoppingCart = [
//   { name: 'Laptop', price: 1200, quantity: 2 },
//   { name: 'Headphones', price: 100, quantity: 3 },
//   { name: 'Mouse', price: 20, quantity: 5 },
// ];

// const totalCost = calculateTotal(shoppingCart);
// console.log('Total Cost:', totalCost);


