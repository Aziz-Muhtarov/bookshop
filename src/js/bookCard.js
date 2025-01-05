export class BookCard {
    constructor({
      id,
      title,
      authors,
      description,
      imageLinks,
      price,
      currencyCode,
      categories,
      ratingsCount,
    }) {
      this.id = id;
      this.title = title;
      this.authors = authors || "Unknown Author";
      this.description = description || "No description available.";
      this.image = imageLinks?.thumbnail || "https://placehold.co/212x300";
      this.price = price || "N/A";
      this.currency = currencyCode || "";
      this.categories = categories || [];
      this.rating = ratingsCount || 0;
    }
  
    render() {
      const card = document.createElement("div");
      card.classList.add("book-card");
      card.setAttribute("data-id", this.id);
  
      card.innerHTML = `
        <img src="${this.image}" alt="Book cover" class="book-card__image" />
        <div class="book-card__details">
          <h3 class="book-card__title">${this.title}</h3>
          <p class="book-card__authors">${this.authors}</p>
          <p class="book-card__description">${this.description}</p>
          <p><strong>${this.currency} ${this.price}</strong></p>
          <button class="book-card__button">Buy Now</button>
        </div>
      `;
      return card;
    }
  }