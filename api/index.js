const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const files = require("./routes/files");
//middleware
//app.use(express.json);
//routes
app.use("/files/data", files);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
