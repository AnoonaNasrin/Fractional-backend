const propertyModel = require("../Model/propertyModel");

exports.findProperty = async (req, res) => {
  try {
    const properties = await propertyModel.find().lean();
    res
      .status(200)
      .json({ status: true, data: properties, message: "succefully fetched" });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};

exports.filterCategory = async (req, res) => {
  try {
    const { place, types, minPrice, maxPrice } = req.body;
    const filtered = await propertyModel.aggregate([
      {
        $match: {
          place: place ? { $regex: place, $options: "i" } : { $exists: true },
          type: types ? { $regrex: types, $options: "i" } : { $exists: true },
          price: { $gte: minPrice, $lte: maxPrice },
        },
      },
    ]);
    res.status(200).json({ status: true, message: er.message });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};
