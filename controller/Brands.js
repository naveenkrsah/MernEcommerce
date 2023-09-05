const { Brand } = require("../model/Brands");

exports.fetchBrands = async (req, res) => {
  try {
    const doc = await Brand.find({}).exec();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createBrands = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    const doc = await brand.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
