const router = require("express").Router();
const { helpDesk, enquiry } = require("../Controller/customerController");

router.get("/enquiry", enquiry);
router.get("/help-desk", helpDesk);
