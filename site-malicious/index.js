const express = require("express");

const app = express();
const port = 3001;

app.use(express.static("static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
