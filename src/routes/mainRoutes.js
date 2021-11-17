const mainController = require("../controllers/mainController");
const { Router } = require("express");
const router = Router();

router.get("/", mainController.getHome);
router.get("/cart", mainController.getCart);
router.get("/checkout", mainController.getCheckout);
router.get("/contact", mainController.getContact);
router.get("/product/:id", mainController.getProduct);
router.get("/products/:category", mainController.getCategory);
router.get("*", mainController.getNotFound);

module.exports = router;
