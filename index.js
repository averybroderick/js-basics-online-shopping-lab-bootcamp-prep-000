var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {};
  itemObj[item] = Math.floor(Math.random() * 100);
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var myStr = "";
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    myStr += `${Object.keys(cart[0])[0]} at ${Object.values(cart[0])[0]}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length - 1) {
        myStr += `${Object.keys(cart[i])[0]} at ${Object.values(cart[i])[0]}, `;
      } else {
        myStr += `and ${Object.keys(cart[i])[0]} at ${Object.values(cart[i])[0]}.`
      }
    }
  }
  console.log(`In your cart, you have ${myStr}`);
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
