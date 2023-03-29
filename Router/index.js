const router = require("express").Router()
const customRouter = require("./customerRouter")
const productRouter = require("./productRouter")
const propertyRouter = require("./propertyRouter")

router.use("/",productRouter)
router.use("/", customRouter )
router.use("/",propertyRouter)


module.exports = router