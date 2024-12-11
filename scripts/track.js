import { calculateCartQuantity } from "../data/cart.js";


updateCartQuantity();
function updateCartQuantity(){
  let cartQuantity = calculateCartQuantity(); 

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}