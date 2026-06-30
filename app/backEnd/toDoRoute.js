const express = require("express");
const router = express.Router();

const { saveMisson , getMisson} = require("./toDoController");

router.post("/", saveMisson);
router.get("/" , getMisson)

module.exports = router;