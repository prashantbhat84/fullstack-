const express = require("express");
const PORT = 5000 || process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
