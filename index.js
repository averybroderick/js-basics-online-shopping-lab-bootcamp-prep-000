var cart = [];

function getCart(item) {
 var itemObj = {};
 itemObj[item] = Math.floor(Math.random() * 100);
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
