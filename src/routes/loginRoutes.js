const loginController = require("../controllers/loginController");
const { Router } = require("express");
const router = Router();

router.get("/", loginController.getLogin);
router.post("/", loginController.postLogin);

module.exports = router;
