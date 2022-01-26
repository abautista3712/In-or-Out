const PORT = process.env.PORT || 3000;

// create an express app
const express = require("express");
const app = express();

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening for requests
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
