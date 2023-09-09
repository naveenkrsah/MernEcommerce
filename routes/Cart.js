const express = require("express");
const {
  addTOCart,
  fetchCartByUser,
  deleteFromCart,
  updateCart,
} = require("../controller/Cart");
const router = express.Router();

router
  .post("/", addTOCart)
  .get("/", fetchCartByUser)
  .delete("/:id", deleteFromCart)
  .patch("/:id", updateCart);

exports.router = router;
