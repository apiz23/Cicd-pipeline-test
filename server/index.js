const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Good");
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
