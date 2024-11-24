import { Card } from './card.js';

export class ProductList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.products = [];
  }

  setProducts(products) {
    this.products = products.map(
      (product) => new Card(product)
    );
  }

  render() {
    this.container.innerHTML = '';
    this.products.forEach((product) => {
      this.container.appendChild(product.render());
    });
  }
}