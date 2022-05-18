const foodController = require("../controllers/food");

// router
const router = require("express").Router();

router.get("/:id", foodController.getFoodById);
router.get("/", foodController.getFoods);
router.post("/", foodController.addFood);
router.put("/:id", foodController.updateFoodById);
router.patch("/:id/favourite", foodController.updateFavourite);
router.delete("/:id", foodController.deleteFoodById);

module.exports = router;
