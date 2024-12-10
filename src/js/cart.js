const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

export function addToCart(id) {
  if (!cart.includes(id)) {
    cart.push(id);
    saveCart();
  }
}

export function removeFromCart(id) {
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
    saveCart();
  }
}

function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

export function getCart() {
  return cart;
}

export function updateCartCount() {
  const countElement = document.querySelector(".cart-count");
  countElement.textContent = cart.length;
}
