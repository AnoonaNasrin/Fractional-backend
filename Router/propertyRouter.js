const express = require("express");
const {findProperty , filterCategory} = require("../Controller/propertyController");

const router = express.Router();

router.get("/find-prop", findProperty);
router.get("/filter" , filterCategory );


module.exports = router;
