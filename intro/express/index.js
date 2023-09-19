const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("my first app using node and express");
});
app.listen(port, () => {
    console.log(`the application started successfully on port${port}`);
});

