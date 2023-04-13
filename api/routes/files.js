const express = require("express");
const router = express.Router();

const { getAllFiles } = require("../controllers/FilesController");

router.route("/").get(getAllFiles);
module.exports = router;
