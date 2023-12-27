const express = require("express");

const app = express();

app.get("/home", (req, res) => {
    res.json({ message: "OK"});
})

app.listen(1000, () => {
    console.log("Server running on port 1000");
})