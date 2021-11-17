const registerController = require("../controllers/registerController");
const { Router } = require("express");
const router = Router();

router.get("/", registerController.getRegister);
router.post("/", registerController.postRegister);

module.exports = router;
