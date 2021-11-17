const controller = {
  getLogin: (_, res) => {
    res.render("pages/login");
  },
  postLogin: (req, res) => {},
};

module.exports = controller;
