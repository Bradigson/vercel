const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getAllUserById);

module.exports = router;