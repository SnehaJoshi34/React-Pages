// src/mockService.js
import products from "./mockData";

class MockService {
  constructor() {
    this.products = [...products];
  }

  getAllProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 500); // Simulate network delay
    });
  }

  getProductById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = this.products.find((p) => p.id === parseInt(id));
        if (product) {
          resolve(product);
        } else {
          reject(new Error("Product not found"));
        }
      }, 500); // Simulate network delay
    });
  }

  addProduct(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProduct = { ...product, id: this.products.length + 1 };
        this.products.push(newProduct);
        resolve(newProduct);
      }, 500); // Simulate network delay
    });
  }
}

export default new MockService();
