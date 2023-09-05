const express = require("express");
const { fetchBrands, createBrands } = require("../controller/Brands");
const router = express.Router();

router.get("/", fetchBrands).post("/", createBrands);

exports.router = router;
