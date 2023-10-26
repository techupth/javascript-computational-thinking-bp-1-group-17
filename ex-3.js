const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let expensiveitem = -Infinity;
  let mostexpensiveindex ;
  for (let index in products){
    if(products[index].price > expensiveitem){
      expensiveitem = products[index].price;
      mostexpensiveindex = index;}
} console.log("{ name: \"" + products[mostexpensiveindex].name + "\", price: " + expensiveitem + " }");
}


getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
