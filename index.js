var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100) ;
  var cartItems = { itemName: item ,
                    itemPrice: price
  
  };
  cart.push(cartItems);
  return `${cartItems.itemName} has been added to your cart.` ;
}


function viewCart() {
  var array =[];
  for(var i=0; i< cart.length; i++)
   array.push( `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice} .`);
  {
    if(cart.length === 0){
      return `Your shopping cart is empty.`
    }
    if(cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    if(cart.length ===2){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    if(cart.length ===3){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
  }
}

function total() {
  let totalCost = 0;
  for(var i=0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName === item )
    {
      cart.splice(i,1);
      return cart ;
    }
  }
    return `That item is not in your cart.` ;
}

function placeOrder(cardNumber) {
  if(cardNumber){
   var totalCost = total();
   cart = [];
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.` ;
}
else 
    return `Sorry, we don't have a credit card on file for you.` ;
}
