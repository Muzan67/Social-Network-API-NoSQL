const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/populatedb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
