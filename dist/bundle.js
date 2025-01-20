/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/api.js */ \"./src/js/api.js\");\n/* harmony import */ var _js_bookCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/bookCard.js */ \"./src/js/bookCard.js\");\n/* harmony import */ var _js_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/cart.js */ \"./src/js/cart.js\");\n\r\n\r\n\r\n\r\n\r\n// SLIDER\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const slider = new _js_slider_js__WEBPACK_IMPORTED_MODULE_0__.Carousel({\r\n    containerSelector: '.slider_img',\r\n    dotSelector: '.dot',\r\n    interval: 5000, // 5 секунд на слайд\r\n  });\r\n});\r\n\r\n\r\n// Cards rendering\r\nconst sidebarMenu = document.querySelector(\".sidebar-menu__container ul\");\r\nconst booksContainer = document.querySelector(\".books-container\");\r\nconst loadMoreButton = document.querySelector(\".load-more\");\r\nlet currentQuery = \"Business\";\r\nlet startIndex = 0;\r\n\r\nfunction clearBooksContainer() {\r\n  booksContainer.innerHTML = \"\";\r\n}\r\n\r\nfunction handleGenreClick(event) {\r\n  event.preventDefault();\r\n  const genreLink = event.target.closest(\"a\");\r\n  if (!genreLink) return;\r\n\r\n  const selectedGenre = genreLink.dataset.genre;\r\n  if (selectedGenre) {\r\n    currentQuery = selectedGenre;\r\n    startIndex = 0;\r\n    clearBooksContainer(); // Очистка карточек перед рендером новых\r\n    renderBooks(); // Рендер карточек выбранного жанра\r\n  }\r\n}\r\n\r\nsidebarMenu.addEventListener(\"click\", handleGenreClick);\r\n\r\nasync function renderBooks() {\r\n  try {\r\n    const books = await (0,_js_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchBooks)(currentQuery, 6, startIndex);\r\n    console.log(\"Fetched\", books.length, books); // Лог количества и данных книг\r\n    books.forEach((bookData) => {\r\n      const book = new _js_bookCard_js__WEBPACK_IMPORTED_MODULE_2__.BookCard({\r\n        id: bookData.id,\r\n        ...bookData.volumeInfo,\r\n        ...bookData.saleInfo,\r\n      });\r\n      booksContainer.appendChild(book.render());\r\n    });\r\n    attachEventListeners();\r\n  } catch (error) {\r\n    console.error(\"Error rendering books:\", error);\r\n  }\r\n}\r\n\r\nfunction attachEventListeners() {\r\n  const buttons = document.querySelectorAll(\".book-card__button\");\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", (event) => {\r\n      const card = event.target.closest(\".book-card\");\r\n      const bookId = card.dataset.id;\r\n\r\n      if (button.textContent === \"Buy Now\") {\r\n        (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_3__.addToCart)(bookId);\r\n        button.textContent = \"In Cart\";\r\n        button.classList.add(\"in-cart\");\r\n      } else {\r\n        (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_3__.removeFromCart)(bookId);\r\n        button.textContent = \"Buy Now\";\r\n        button.classList.remove(\"in-cart\");\r\n      }\r\n      (0,_js_cart_js__WEBPACK_IMPORTED_MODULE_3__.updateCartCount)();\r\n    });\r\n  });\r\n}\r\n\r\nloadMoreButton.addEventListener(\"click\", () => {\r\n  startIndex += 6;\r\n  renderBooks();\r\n});\r\n\r\n(0,_js_cart_js__WEBPACK_IMPORTED_MODULE_3__.updateCartCount)();\r\nrenderBooks();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiKey: () => (/* binding */ apiKey),\n/* harmony export */   baseApiUrl: () => (/* binding */ baseApiUrl),\n/* harmony export */   fetchBooks: () => (/* binding */ fetchBooks)\n/* harmony export */ });\nconst apiKey = \"AIzaSyAkmf3qkRoL5lhVfITJvNlcENkhIVVC-74\";\r\nconst baseApiUrl = `https://www.googleapis.com/books/v1/volumes`;\r\n\r\nasync function fetchBooks(query, maxResults = 6, startIndex = 0) {\r\n  const url = `${baseApiUrl}?q=subject:${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;\r\n  try {\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return data.items || [];\r\n  } catch (error) {\r\n    console.error(\"Error fetching books:\", error);\r\n    throw error;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/api.js?");

/***/ }),

/***/ "./src/js/bookCard.js":
/*!****************************!*\
  !*** ./src/js/bookCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookCard: () => (/* binding */ BookCard)\n/* harmony export */ });\nclass BookCard {\r\n  constructor({\r\n    id,\r\n    title,\r\n    authors,\r\n    description,\r\n    imageLinks,\r\n    price,\r\n    currencyCode,\r\n    categories,\r\n    ratingsCount,\r\n  }) {\r\n    this.id = id;\r\n    this.title = title;\r\n    this.authors = authors || \"Unknown Author\";\r\n    this.description = description || \"No description available.\";\r\n    this.image = imageLinks?.thumbnail || \"https://placehold.co/212x300\";\r\n    this.price = price || \"N/A\";\r\n    this.currency = currencyCode || \"\";\r\n    this.categories = categories || [];\r\n    this.rating = ratingsCount || 0;\r\n  }\r\n\r\n  render() {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"book-card\");\r\n    card.setAttribute(\"data-id\", this.id);\r\n\r\n    card.innerHTML = `\r\n        <img src=\"${this.image}\" alt=\"Book cover\" class=\"book-card__image\" />\r\n        <div class=\"book-card__details\">\r\n          <h3 class=\"book-card__title\">${this.title}</h3>\r\n          <p class=\"book-card__authors\">${this.authors}</p>\r\n          <svg width=\"64\" height=\"12\" viewBox=\"0 0 160 32\">\r\n            <defs>\r\n              <mask id=\"perc\">\r\n                <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\" />\r\n                // <rect x=\"48%\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"grey\"/>\r\n              </mask>\r\n\r\n              <symbol viewBox=\"0 0 32 32\" id=\"star\">\r\n                <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n              </symbol>\r\n              <symbol viewBox=\"0 0 160 32\" id=\"stars\">\r\n                <use xlink:href=\"#star\" x=\"-64\" y=\"0\"></use>\r\n                <use xlink:href=\"#star\" x=\"-32\" y=\"0\"></use>\r\n                <use xlink:href=\"#star\" x=\"0\" y=\"0\"></use>\r\n                <use xlink:href=\"#star\" x=\"32\" y=\"0\"></use>\r\n                <use xlink:href=\"#star\" x=\"64\" y=\"0\"></use>\r\n              </symbol>\r\n            </defs>\r\n\r\n            <use xlink:href=\"#stars\" fill=\"#F2C94C\" mask=\"url(#perc)\"></use>\r\n          </svg>\r\n          <p class=\"book-card__description\">${this.description}</p>\r\n          <p class=\"book-card__price\">${this.currency} ${this.price}</p>\r\n          <button class=\"book-card__button\">Buy Now</button>\r\n        </div>\r\n      `;\r\n    return card;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/bookCard.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: () => (/* binding */ addToCart),\n/* harmony export */   getCart: () => (/* binding */ getCart),\n/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart),\n/* harmony export */   updateCartCount: () => (/* binding */ updateCartCount)\n/* harmony export */ });\nconst cart = JSON.parse(localStorage.getItem(\"shoppingCart\")) || [];\r\n\r\nfunction addToCart(id) {\r\n  if (!cart.includes(id)) {\r\n    cart.push(id);\r\n    saveCart();\r\n  }\r\n}\r\n\r\nfunction removeFromCart(id) {\r\n  const index = cart.indexOf(id);\r\n  if (index > -1) {\r\n    cart.splice(index, 1);\r\n    saveCart();\r\n  }\r\n}\r\n\r\nfunction saveCart() {\r\n  localStorage.setItem(\"shoppingCart\", JSON.stringify(cart));\r\n}\r\n\r\nfunction getCart() {\r\n  return cart;\r\n}\r\n\r\n\r\n// Работа с корзиной\r\n\r\nfunction updateCartCount() {\r\n  const countElement = document.querySelector(\".cart-count\");\r\n  if (!countElement) return;\r\n\r\n  const itemCount = cart.length;\r\n\r\n  // Показываем или скрываем ярлык в зависимости от количества товаров\r\n  if (itemCount > 0) {\r\n    countElement.textContent = itemCount; // Устанавливаем текущую длину корзины\r\n    countElement.style.display = \"flex\"; // Отображаем ярлык\r\n  } else {\r\n    countElement.style.display = \"none\"; // Скрываем ярлык\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Carousel: () => (/* binding */ Carousel)\n/* harmony export */ });\nclass Carousel {\r\n    constructor({ containerSelector, dotSelector, interval = 5000 }) {\r\n      this.carouselContainer = document.querySelector(containerSelector);\r\n      this.slides = this.carouselContainer.querySelectorAll('img');\r\n      this.dots = document.querySelectorAll(dotSelector);\r\n      this.currentIndex = 0;\r\n      this.totalSlides = this.slides.length;\r\n      this.interval = interval;\r\n      this.timer = null;\r\n  \r\n      this.init();\r\n    }\r\n  \r\n    init() {\r\n      this.updateSlide(0); // Инициализация первого слайда\r\n      this.setupEventListeners();\r\n      this.startCarousel();\r\n    }\r\n  \r\n    updateSlide(index) {\r\n      this.currentIndex = index;\r\n      this.carouselContainer.style.transform = `translateX(-${this.currentIndex * 100}%)`;\r\n      this.updateDots();\r\n    }\r\n  \r\n    updateDots() {\r\n      this.dots.forEach((dot, idx) => {\r\n        dot.classList.toggle('active', idx === this.currentIndex);\r\n      });\r\n    }\r\n  \r\n    setupEventListeners() {\r\n      this.dots.forEach(dot => {\r\n        dot.addEventListener('click', () => {\r\n          const index = Number(dot.getAttribute('data-index'));\r\n          this.updateSlide(index);\r\n          this.resetTimer();\r\n        });\r\n      });\r\n    }\r\n  \r\n    startCarousel() {\r\n      this.timer = setInterval(() => {\r\n        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;\r\n        this.updateSlide(this.currentIndex);\r\n      }, this.interval);\r\n    }\r\n  \r\n    stopCarousel() {\r\n      clearInterval(this.timer);\r\n    }\r\n  \r\n    resetTimer() {\r\n      this.stopCarousel();\r\n      this.startCarousel();\r\n    }\r\n  }\r\n  \r\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;