const express = require("express");

const PORT = 5000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("a7a");
});

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
