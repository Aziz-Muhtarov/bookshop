import { Carousel } from './js/slider.js';
import { fetchBooks } from "./js/api.js";
import { BookCard } from "./js/bookCard.js";
import { addToCart, removeFromCart, updateCartCount } from "./js/cart.js";

// SLIDER
document.addEventListener('DOMContentLoaded', () => {
  const slider = new Carousel({
    containerSelector: '.slider_img',
    dotSelector: '.dot',
    interval: 5000, // 5 секунд на слайд
  });
});




const booksContainer = document.querySelector(".books-container");
const loadMoreButton = document.querySelector(".load-more");
let currentQuery = "Business";
let startIndex = 0;

async function renderBooks() {
  try {
    const books = await fetchBooks(currentQuery, 6, startIndex);
    books.forEach((bookData) => {
      const book = new BookCard({
        id: bookData.id,
        ...bookData.volumeInfo,
        ...bookData.saleInfo,
      });
      booksContainer.appendChild(book.render());
    });
    attachEventListeners();
  } catch (error) {
    console.error("Error rendering books:", error);
  }
}

function attachEventListeners() {
  const buttons = document.querySelectorAll(".book-card__button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".book-card");
      const bookId = card.dataset.id;

      if (button.textContent === "Buy Now") {
        addToCart(bookId);
        button.textContent = "In Cart";
        button.classList.add("in-cart");
      } else {
        removeFromCart(bookId);
        button.textContent = "Buy Now";
        button.classList.remove("in-cart");
      }
      updateCartCount();
    });
  });
}

loadMoreButton.addEventListener("click", () => {
  startIndex += 6;
  renderBooks();
});

updateCartCount();
renderBooks();