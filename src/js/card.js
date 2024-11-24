export class Card {
    constructor({ img, author, title, ratingsCount, avarageRating, description, price }) {
        this.img = img;
        this.author = author;
        this.title = title;
        this.averageRating = averageRating;
        this.ratingsCount = ratingsCount;
        this.description = description;
        this.price = price;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
          <img src="${this.img}" alt="${this.title}" class="product-image" />
          <h3 class="product-author">${this.author}</h3>
          <h2 class="product-title">${this.title}</h2>
          <p class="product-averageRating">${this.averageRating}</p>
          <p class="product-ratingsCount">${this.ratingsCount}</p>
          <p class="product-description">${this.description}</p>
          <p class="product-price">$${this.price}</p>
        `;
        return card;
    }
}