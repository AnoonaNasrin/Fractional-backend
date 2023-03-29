const productModel = require("../Model/propertyModel");
const multer = require("multer");
const propertyModel = require("../Model/propertyModel");
const adminModel = require("../Model/adminModel");

// Add product //

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

exports.upload = multer({ storage: storage }).array("images", 5);

exports.products = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const images = req.files.map((file) => file.filename);
      const productUpload = await propertyModel.create({
        ...req.body,
        images: images,
      });
      res.status(201).json({ status: true, message: "product added" });
    });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};

// Getting product //

exports.getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find().lean();
    res
      .status(200)
      .json({ status: true, message: "success", products: products });
  } catch (err) {
    res.status(400).json({ status: false, message: er.message });
  }
};

// delete product//

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ status: true, message: "Deleted" });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};
// Admin Panel //

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModel.find({ email: email, password: password });
    res.status(200).json({ status: true, message: "success request" });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};
