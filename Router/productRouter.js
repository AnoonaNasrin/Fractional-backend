const express = require('express');
const router = express.Router()
const {products,upload,getAllProduct ,deleteProduct, login} = require("../Controller/productControler")

router.post('/login', login)
router.get("/get-all-product", getAllProduct)
router.post("/delete/:productId",deleteProduct)
router.post("/add-product",upload,products)


module.exports = router;