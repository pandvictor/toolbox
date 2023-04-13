const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const { getAll } = require("../services/FilesSvc");

const getAllFiles = asyncWrapper(async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    console.warn(error);
    res.status(400).send(error.message);
  }
});

module.exports = { getAllFiles };
