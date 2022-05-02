const express = require('express');
const router = express.Router();
const moviesController = require("../controller/moviesController");

router.get('/', moviesController.list);
router.get("/drama",moviesController.drama);
router.get("/add",moviesController.add);
router.post("/add",moviesController.create);
router.post("/delete/:id", moviesController.delete);
router.get("/:id",moviesController.detail);

module.exports = router;

