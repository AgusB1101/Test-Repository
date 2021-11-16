const fetch = require("node-fetch");

const Product = {
  baseURL: "https://dhfakestore.herokuapp.com/api/products/",

  allProducts: async function (url = "") {
    const res = await fetch(this.baseURL + url);
    const products = await res.json();
    return products;
  },

  findByID: async function (id) {
    const allProducts = await this.allProducts();
    return allProducts.find((p) => p._id === id);
  },

  searchURL: async function (url) {
    allProducts(url);
  },
};

module.exports = Product;
