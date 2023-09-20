const express = require("express");
const path = require(`path`);
const app = express();
const port = 80;
//for serving static file
app.use(`/static`, express.static(`static`));
//set the template engine as pug
app.set(`view engine`, `pug`);

//set the view directory
app.set(`views`, path.join(__dirname, `views`));

//pug demo endpoint
app.get(`/demo`, (req, res) => {
    res.status(200).render(`demo`, { title: `hey`, message: `hello duniya` })
})

app.get("/", (req, res) => {
    res.status(200).send("my first app using node and express");
});
app.get("/about", (req, res) => {
    res.send("my first about page app using node and express");
});
app.post("/about", (req, res) => {
    res.send("my post request to about page app using node and express");
});
app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`);
});

