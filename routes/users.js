const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
const {body, validationResult} = require('express-validator')

router.get('/', userController.list);
router.get("/add",userController.add);
router.post("/add",userController.create);
router.get("/login",userController.login);
router.post("/login",userController.loginProcess);

module.exports = router;

