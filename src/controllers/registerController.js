const controller = {
  getRegister: (_, res) => {
    res.render("pages/register");
  },
  postRegister: (req, res) => {},
};

module.exports = controller;
