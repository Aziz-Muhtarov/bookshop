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


// Работа с корзиной

export function updateCartCount() {
  const countElement = document.querySelector(".cart-count");
  if (!countElement) return;

  const itemCount = cart.length;

  // Показываем или скрываем ярлык в зависимости от количества товаров
  if (itemCount > 0) {
    countElement.textContent = itemCount; // Устанавливаем текущую длину корзины
    countElement.style.display = "flex"; // Отображаем ярлык
  } else {
    countElement.style.display = "none"; // Скрываем ярлык
  }
}