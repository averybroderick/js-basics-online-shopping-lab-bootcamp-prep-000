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
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var myStr = "";
    myStr += `${cart[0].keys[0]} at ${cart[0].values[0]}.`;
  } else {
    var myStr = "";
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length -1) {
        myStr += `${cart[i].keys[0]} at ${cart[i].values[0]}, `;
      } else {
        myStr += `and ${cart[i].keys[0]} at ${cart[i].values[0]}.`
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
