const controller = {
  getCart: (_, res) => {
    res.render("pages/cart");
  },
  getCategory: (req, res) => {
    const { category } = req.params;
    res.render("pages/category", { category });
  },
  getCheckout: (_, res) => {
    res.render("pages/checkout");
  },
  getContact: (_, res) => {
    res.render("pages/contact");
  },
  getHome: (_, res) => {
    res.render("pages/home");
  },
  getNotFound: (_, res) => {
    res.render("pages/notfound");
  },
  getProduct: (req, res) => {
    const { id } = req.params;
    res.render("pages/product", { id });
  },
};

module.exports = controller;
