const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/compute", (req, res, next) => {
  try {
    res.status(200).json({ message: "Computation done" });
  } catch (error) {
    res.status(400).json({ status: "Error", message: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("[SERVER RUNNING IN]", process.env.PORT);
});
