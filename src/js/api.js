export class ProductService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchProducts() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch products:', error);
            return [];
        }
    }
}