const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const default_PORT = 4000;
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cmduy first web application." });
});

require("./app/routes/product.routes.js")(app);

const PORT = process.env.PORT || default_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
