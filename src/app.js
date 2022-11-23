const express = require("express");
const Router = require("./crud/crud.router");
const PORT = 9000;

const app = express();

app.use(express.json());

app.use("/", Router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}!`);
});
