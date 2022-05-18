const router = require("express").Router();
const foodRouter = require("./food");

router.use("/foods", foodRouter);

module.exports = router;
