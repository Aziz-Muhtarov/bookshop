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
          <svg width="64" height="12" viewBox="0 0 160 32">
            <defs>
              <mask id="perc">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                // <rect x="48%" y="0" width="100%" height="100%" fill="grey"/>
              </mask>

              <symbol viewBox="0 0 32 32" id="star">
                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
              </symbol>
              <symbol viewBox="0 0 160 32" id="stars">
                <use xlink:href="#star" x="-64" y="0"></use>
                <use xlink:href="#star" x="-32" y="0"></use>
                <use xlink:href="#star" x="0" y="0"></use>
                <use xlink:href="#star" x="32" y="0"></use>
                <use xlink:href="#star" x="64" y="0"></use>
              </symbol>
            </defs>

            <use xlink:href="#stars" fill="#F2C94C" mask="url(#perc)"></use>
          </svg>
          <p class="book-card__description">${this.description}</p>
          <p class="book-card__price">${this.currency} ${this.price}</p>
          <button class="book-card__button">Buy Now</button>
        </div>
      `;
    return card;
  }
}