const customerModel = require("../Model/customerModel");
// const enquiryModel = require("../Model/enquiryModel")

// exports.enquiry = async (req, res) => {
//   try {
//     const customer = await enquiryModel.create(req.body);
//     res.status(200).json({ status: true, message: "created" });
//   } catch (er) {
//     res.status(400).json({ status: false, message: er.message });
  
// };

exports.helpDesk = async (req, res) => {
  try {
    const user = await customerModel.create(req.body)
    res.status(200).json({message:"success" , status:true})
  } catch (er) {
    res.status(400).json({message:er.message , status:false})
  }
};
