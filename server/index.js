const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static(path.join(__dirname, "/[_.V._]_Sample/web")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
