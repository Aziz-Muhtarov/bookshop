import { Carousel } from './js/slider.js';
import { ProductService } from './js/api.js'
import { ProductList } from './js/cardlist.js'

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Carousel({
    containerSelector: '.slider_img',
    dotSelector: '.dot',
    interval: 5000, // 5 секунд на слайд
  });
});


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyAkmf3qkRoL5lhVfITJvNlcENkhIVVC-74&printType=books&startIndex=0&maxResults=6&langRestrict=en';

async function main() {
  const productService = new ProductService(API_URL);
  const productList = new ProductList('productContainer');

  const products = await productService.fetchProducts();
  productList.setProducts(products);
  productList.render();
}



main();