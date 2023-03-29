const router = require("express").Router();
const { helpDesk, enquiry } = require("../Controller/customerController");

// router.post("/enquiry", enquiry);
router.post("/help-desk", helpDesk);


module.exports = router