const { Categories } = require("../model/Categories");

exports.createCategories = async (req, res) => {
  const categories = new Categories(req.body);
  try {
    const doc = await categories.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
// exports.fetchBrands = async (req, res) => {
//     try {
//       const doc = await Brand.find({}).exec();
//       res.status(201).json(doc);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   };
exports.fetchCategories = async (req, res) => {
  try {
    const doc = await Categories.find({}).exec();
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
