require("dotenv/config");
//  require("./database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const morgan = require("morgan");

// MiddelWares
// Format Request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Morgan For logger
app.use(morgan("combined"));

/**
// @routes
// Articles
*/
app.use("/api/articles", require("./routes/Articles"));

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT} 🚀`);
});
