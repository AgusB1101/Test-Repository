const fs = require("fs");
const path = require("path");
const Product = require("./Product");

const Cart = {
  filename: path.resolve(__dirname, "./cart.json"),

  getCart: function () {
    return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
  },

  writeCart: function (carts) {
    fs.writeFileSync(this.filename, JSON.stringify(carts, null, "   "));
  },

  seekProductInCart: (cart, id) => cart?.find((p) => p._id === id),

  findByEmail: function (email) {
    return this.getCart()[email];
  },

  showCart: function () {
    console.log(this.getCart());
  },

  addToCart: async function (email, productID) {
    let allCarts = this.getCart();
    let product = await Product.findByID(productID);

    if (!Object.entries(allCarts).length) {
      allCarts[email] = [];
      this.writeCart(allCarts);
    }

    userCart = this.findByEmail(email);
    console.log(userCart);
    // delete allCarts[email];

    const productInCart = this.seekProductInCart(userCart, productID);

    if (productInCart) {
      let prIndex = userCart.indexOf(productInCart);
      userCart.splice(prIndex, 1);
    } else {
      userCart.push({ ...product, qty: productInCart ?? 1 });
    }

    allCarts[email] = userCart;
    this.writeCart(allCarts);
  },
};

module.exports = Cart;
